import CategorieseModel from '../model/CategoriesModel.js';


export const GetProducts = async (req, res) => {
  try {
    const products = await CategorieseModel.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
export const ProductUpdate = async (req, res) => {
  try {
    const updated = await CategorieseModel.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );
    res.json({ message: "Product updated", product: updated });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err });
  }
};

export const ProductAdd=async(req,res)=>{
    const newProduct = new CategorieseModel(req.body);
  await newProduct.save();
  res.json({ message: "Product added", product: newProduct });
};

export const ProductDelete= async (req, res) => {
  await CategorieseModel.deleteOne({ id: req.params.id });
  res.json({ message: "Product deleted" });
}