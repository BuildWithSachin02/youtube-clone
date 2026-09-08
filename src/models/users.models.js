import mongoose from "mongoose";
import { bcrypt } from "bcrypt"
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            unique: true,
            lowercase: true,
            trim: true,
            index: true,
            required: true
        },
        email: {
            type: String,
            unique: true,
            lowercase: true,
            trim: true,
            required: true
        },
        fullname: {
            type: String,
            trim: true,
            index: true,
            required: true
        },
        avatar: {
            type: String,//cloudinary url we use
            required: true
        },
        coverImage: {
            type: String,//cloudinary url we use
        },
        watchHIstory: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Video"
        },
        password: {
            type: String,
            required: [true, "password is required"]
        },
        refreshToken: {
            type: String,
        }
    }, { timestamps: true })


userSchema.pre("save", async function (next) {
    if (!this.isModified("passwprd")) return next();
    this.password = bcrypt.hash(this.passowrd, 10)
})
userSchema.methods.isPasswordCorrect = async function (passowrd) {
    return await bcrypt.compare(passowrd, this.password);
}
export const Users = mongoose.model("Users", userSchema)    