import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, min: 3 },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, min: 6 },
  },
  { collection: "users", timestamps: true }
);

const User =new mongoose.model("users", userSchema);
export default User;
