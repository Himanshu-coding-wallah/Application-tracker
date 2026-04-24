import mongoose, { connect, mongo } from "mongoose";
import config from "./config.js";

async function connnectDB(){
    await mongoose.connect(config.MONGO_URI)
    console.log("database connected")
}

export default connectDB