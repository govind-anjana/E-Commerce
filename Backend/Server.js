import express from 'express';
import dotenv from 'dotenv';
import ConnectionData from './config/Db.js';
// import bodyParser from 'body-parser';
import router from './Routes/ProductRoutes.js';
import AdminRouter from './Routes/AdminRouter.js'
dotenv.config()
import cors from 'cors';
const app=express();
const PORT = process.env.PORT || 4000;

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true })); 
ConnectionData();
app.use("/api",router)

app.use('/',AdminRouter);

app.listen(PORT,()=>console.log(`http://localhost:${PORT}`))