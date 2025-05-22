import express from "express";
import cors from "cors";
import dotenv from "dotenv";

// Route Import
import userRoute from "./route/userRoute.js"


dotenv.config()
const app = express(); 
app.use(cors());
app.use(express.json())



// Route Use
app.use("/users",userRoute)

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to PERN API")
})


export default app