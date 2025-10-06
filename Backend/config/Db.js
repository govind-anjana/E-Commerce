import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const ConnectionData = () => {
  console.log(process.env.MONGO_ATLAS)
  mongoose
    .connect(process.env.MONGO_ATLAS) 
    .then(() => console.log("Connection Successfully"))
    .catch((err) => console.log("Not Connected:", err));
}
export default ConnectionData;
