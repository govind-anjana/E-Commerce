import mongoose from "mongoose";
import Counter from "./Counter.js"; 

const CateSchema = new mongoose.Schema(
  {
    id: { type: Number, unique: true }, 
    brand: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    dis: { type: String, default: "0%" },
    rating: { type: String, default: "4" },
    img: { type: String, required: true }
  },
  {
    collection: "Categories",
    timestamps: true
  }
);


CateSchema.pre("save", async function (next) {
  if (this.isNew) {
    const counter = await Counter.findByIdAndUpdate(
      { _id: "categoryId" },
      { $inc: { seq: 1 } },
      { new: true, upsert: true }
    );
    this.id = counter.seq;
  }
  next();
});

const CategoriesModel = mongoose.model("Categories", CateSchema);

export default CategoriesModel;
