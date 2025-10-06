import CartItem from "../model/CardModel.js";

export const GetItem=async(req,res)=>{
     try {
    const cartItems = await CartItem.find();
    res.json(cartItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
export const AddItem=async(req,res)=>{
        try {
    const { productId, name, price, qty, color, img } = req.body;

    let item = await CartItem.findOne({ productId });
    if (item) {
      item.qty += qty;
      await item.save();
      return res.status(201).json(item);
    }

    
    item = new CartItem({ productId, name, price, qty, color, img });
    const savedItem = await item.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export const CardUpdate=async(req,res)=>{
     try {
    const { qty } = req.body;
    const item = await CartItem.findById(req.params.id);
    if (!item) return res.status(404).json({ message: "Item not found" });

    item.qty = qty;
    await item.save();
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

export const CardDelete =async(req,res)=>{
    try {
    const item = await CartItem.findByIdAndDelete(req.params.id);
    res.json({ message: "Item removed", item });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}