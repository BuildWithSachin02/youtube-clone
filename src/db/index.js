import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URI}/${DB_NAME}`
        );
        // console.log(process.env.MONGODB_URI)//also nodejs giving to me exact vairable where we store the vairable in .env but in this file we dont import the .env file ?? so how nodejs still giving to me exact uri ???
        console.log(
            `MongoDB connected ✅ !! DB: ${connectionInstance.connection.name} HOST: ${connectionInstance.connection.host}`
        );
    } catch (error) {
        console.log("MONGODB connection failed ❌", error);
        process.exit(1);
    }
};

export default connectDB;