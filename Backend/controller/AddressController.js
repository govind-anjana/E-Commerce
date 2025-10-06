import AddressModel from "../model/AddressModel.js";

export const AllAddress = async (req, res) => {
  try {
    const addresses = await AddressModel.find();
    res.status(201).json(addresses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


export const Address = async (req, res) => {
  try {
    const newAddress = new AddressModel(req.body);
    const savedAddress = await newAddress.save();
    res.status(201).json(savedAddress);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const AddressUpdate = async (req, res) => {
  try {
    const updated = await AddressModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
