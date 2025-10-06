import CategorieseModel from "../model/CategoriesModel.js";

export const ShowCate = async (req, res) => {
  const products = await CategorieseModel.find();
  res.status(200).json({ message: "All Product Show", data: products });
};
