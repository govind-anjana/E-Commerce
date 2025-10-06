import AdminModel from "../model/AdminModel.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config()
export const SignUpAdmin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingAdmin = await AdminModel.findOne({ username });
    if (existingAdmin) return res.status(400).json({ message: "Admin already exists" });

    const hashed = await bcrypt.hash(password, 10);
    const newAdmin = new AdminModel({ username, password: hashed });
    await newAdmin.save();
    res.json({ message: "Admin created successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const GetAdmin = async (req, res) => {
  try {
    const addresses = await AdminModel.find();
    res.status(201).json(addresses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const Admin=async(req,res)=>{
    const { username, password } = req.body;
  const admin = await AdminModel.findOne({ username });
  if (!admin) return res.status(400).json({ message: "Admin not found" });

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid password" });

  const token = jwt.sign({ id: admin._id, username: admin.username }, process.env.JWT_SECRET, { expiresIn: "2h" });
  res.json({ message: "Login successful", token });
}

export const Check= (req, res) => {
  res.json({ message: "Admin verified", admin: req.admin });
};