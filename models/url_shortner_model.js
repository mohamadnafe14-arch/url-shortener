import mongoose from "mongoose";
export const urlSchema = new mongoose.Schema({
    originalUrl: {
        type:String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true
    },
    clicks: {
        type: Number,
        default: 0
    }
}, {
});
export const Url = mongoose.model("Url", urlSchema);
