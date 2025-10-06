import ProductModel from "../model/ProductModel.js";

export const ShowProduct = async (req, res) => {
  const products = await ProductModel.find();
  res.status(200).json({ message: "All Product Show", data: products });
};
export const AddProduct = async (req, res) => {
  try {
    const product = new ProductModel(req.body);
   const saved= await product.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json(err);
  }
};
export const DeleteProduct = async (req, res) => {
  try {
    const result = await ProductModel.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedList = await TodoModel.find();
    res.json(updatedList);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
export const UpdateProduct = async (req, res) => {
  const updated = await ProductModel.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.json(updated);
};
