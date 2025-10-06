import mongoose from "mongoose";

const AddSchema = new mongoose.Schema(
  {
    address: String,
    name: String,
    phone: { type: String, required: true, min: 10 },
    house: String,
    area: String,
    landmark: String,
    city: String,
    state: String,
    work: String,
    pincode: String,
  },
  {
    timestamps: true,
  }
);

const AddressModel = new mongoose.model("Address", AddSchema);

export default AddressModel;
