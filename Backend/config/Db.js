import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const ConnectionData = () => {
  mongoose
    .connect(process.env.MONGO_URL) 
    .then(() => console.log("Connection Successfully"))
    .catch((err) => console.log("Not Connected:", err));
}
export default ConnectionData;
