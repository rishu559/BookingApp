import express from "express" // 1.1
import dotenv from "dotenv" // 3.1
import mongoose from "mongoose" // 2.1
dotenv.config() //3.2
const app = express() // 1.2

import authRoute from "./routes/auth.js"

// Connnection part 
  const connect = async () =>{
  try {
      await mongoose.connect(process.env.MONGO); // 2.2
      console.log("connected to mongoDB.")
    } catch (error) {
      throw error;
    }
  };

  mongoose.connection.on("disconnected",()=>{ // optional 2.3
    console.log("mongoDB disconnected!!");
  })
  mongoose.connection.on("connected",()=>{
    console.log("mongoDB Connected!!");
  })

  app.listen(4001,()=>{ //1.3
      connect();
      console.log("Connected to backend");
  })

// middleware
