import mongoose from "mongoose";

const CateSchema = new mongoose.Schema(
  {
    id: { type: Number, unique: true },
    brand: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    dis: { type: String, default: "0%" },
    rating: { type: String, default: "4" },
    img: { type: String, required: true },
  },
  {
    collection: "Categories",
    timestamps: true,
  }
);

const CategoriesModel = mongoose.model("Categories", CateSchema);

export default CategoriesModel;
