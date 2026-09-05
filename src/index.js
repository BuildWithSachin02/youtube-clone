import "dotenv/config";
import { app } from "./app.js"
import connectDB from "./db/index.js";
// console.log(process.env.MONGODB_URI);//mongodb+srv://sachinadmin:sachinMongod1234@cluster0.isbfagu.mongodb.net
connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is running ${process.env.PORT}`)
        })
    })
    .catch((err) => {
        console.log("MongoDB connection failed ❌", err)
    })