import express from 'express';
import { AddProduct, ShowProduct } from '../controller/ProductController.js';
import { ShowCate } from '../controller/CategoriesController.js';
import { Login, SignUp, updateUser } from '../controller/auth.js';
import { AddItem, CardDelete, CardUpdate, GetItem } from '../controller/CardController.js';
import { Address, AddressUpdate, AllAddress } from '../controller/AddressController.js';
const router=express.Router();
//Product
router.post("/AddProduct",AddProduct);
router.get("/ShowProduct",ShowProduct);

//Card
router.post("/addcard",AddItem);
router.get("/showcard",GetItem);
router.put("/cardupdate/:id",CardUpdate)
router.delete("/carddelete/:id",CardDelete)

router.get("/ShowCategories",ShowCate);
//User Sign Up
router.post("/signup",SignUp);
router.post("/login",Login);
router.put("/updateuser/:id",updateUser)

// router.get("/product",AllProduct)
router.get("/address",AllAddress)
router.post("/address",Address)
router.put("/addressupdate/:id",AddressUpdate);





export default router