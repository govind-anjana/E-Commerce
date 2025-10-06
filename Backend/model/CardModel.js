import mongoose from "mongoose";

const cartItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true }, 
  name: { type: String, required: true },
  price: { type: Number, required: true },
  qty: { type: Number, default: 1 }, 
  color: { type: String },
  img: { type: String },
}, { timestamps: true });
const CartItem = mongoose.model("CartItem", cartItemSchema);
export default CartItem;
