import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({ limit: "16kb" }))//if user send to json format and we accept only 16kb files data only
app.use(express.urlencoded({ extended: true, limit: "16kb" }))//same thing we are doing how many data are sending how we tackle them so if some one send in url format so url haivng multiple character we have to encoded
app.use(express.static("public"))//for public content if i want to anyone can access this files/img/videos
app.use(express.cookieParser())//cookieparser stands for users cookie i want to get them and basic do crud operation and only server can read this cookie
export { app }