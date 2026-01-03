// require ('dotenv').config({path: "./env"}) ;
import dotenv from "dotenv" ;
import { connectDB } from "./db/index.js" ;

dotenv.config({
    path: "./env"
}) ;

 await connectDB()
 .then(()=>{
    app.listen(process.env.PORT || 3000, ()=>{
        console.log(`Server is Running at Port:${process.env.PORT}`);        
    })
 })
 .catch((err)=>{
    console.log("MONGODB connection failed!!",err);
 })




/*
import mongoose from "mongoose" ;
import { DB_NAME } from "./constants";
import express from "express" ;
const app = express() ;

 (async ()=>{
    try{
        await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`) ;
        app.on("error", (error) => {
            console.error("ERROR:", error);
            throw error ;
        }) ;
        app.listen(process.env.PORT || 3000, ()=>{
            console.log(`Server is running on port ${process.env.PORT || 3000}`) ;
        }) ;
    }catch(error){
        console.error("ERROR:", error);
        throw error ;
    }
 })()
    */ 