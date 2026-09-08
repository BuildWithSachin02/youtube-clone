import mongoose from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema(
    {
        videoFIle:{
            type:String,
            require:true
        },
        thumbnail:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        },
        duration:{
            type:Number,
            required:true
        },
        views:{
            type:Number,
            default:0
        },
        isBoolean:{
            type:Boolean,
            default:true
        },
        owener:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Users"
        }

    },{timestamps:true})
 

videoSchema.plugin(mongooseAggregatePaginate)    
export const Videos = mongoose.model("Videos", videoSchema)    