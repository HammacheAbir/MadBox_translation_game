import mongoose from "mongoose"

const WordSchema = new mongoose.Schema({
    fr:{type:String, required:[true,"please enter french word"]},
    en:{type:String}
})

export const Word = mongoose.model("Word",WordSchema)