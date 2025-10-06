import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { id: 1, name: "Govind", color: "Red", price: 34, qty: 1, img: "" },
    { id: 2, name: "Laptop Bag", color: "Black", price: 1200, qty: 1, img: "" },
  ],
};
 
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existing = state.items.find((i) => i.id === product.id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ ...product, qty: 1 });
      }
    },
    increaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.qty += 1;
    },
    decreaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.qty > 1) item.qty -= 1;
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
  },
});

export const {addToCart, increaseQty, decreaseQty, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
