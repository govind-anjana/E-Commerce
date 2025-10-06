import express from "express";
import {  GetProducts, ProductAdd, ProductDelete, ProductUpdate } from "../controller/AdminProductController.js";
import { verifyAdmin } from "../Middleware/auth.js";
import { Admin, Check, GetAdmin, SignUpAdmin } from "../controller/AdminController.js";
const router = express.Router();

//admin
router.post("/adminsignup",SignUpAdmin);
router.get("/getadmin",GetAdmin);
router.post("/admin",Admin);
router.get("/check",verifyAdmin,Check);


//Admin Product Controller
router.post('/product',verifyAdmin,ProductAdd);
router.get("/product",verifyAdmin,GetProducts)
router.put("/products/:id",verifyAdmin,ProductUpdate)
router.delete("/products/:id",verifyAdmin,ProductDelete);

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4ZTM4YzEyZDdjNmExZDljMDA3YTdhZCIsInVzZXJuYW1lIjoiZ292aW5kIiwiaWF0IjoxNzU5NzQ2MTY0LCJleHAiOjE3NTk3NTMzNjR9.HgYTQkIaNcmOPzZvbHfMDkChgL5ce7XjPEgO1AAwYu4
export default router