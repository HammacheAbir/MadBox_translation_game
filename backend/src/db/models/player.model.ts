import mongoose from "mongoose"

const PlayerSchema = new mongoose.Schema({
    name:{type:String, required:true},
    score:{type:Number, requires:true}
})

export const Player = mongoose.model("Player",PlayerSchema)