import mongoose from "mongoose";

const ProSchema=new mongoose.Schema({
 name: String,
  price: Number,
  brand: String,
  inStock: Boolean,
  colors: String,
  rating: Number
});

const ProductModel=new mongoose.model("Products",ProSchema);

export default ProductModel