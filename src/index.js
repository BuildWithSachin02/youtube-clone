import "dotenv/config";

import connectDB from "./db/index.js";
// console.log(process.env.MONGODB_URI);//mongodb+srv://sachinadmin:sachinMongod1234@cluster0.isbfagu.mongodb.net
connectDB();