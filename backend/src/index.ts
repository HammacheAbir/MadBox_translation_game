require('dotenv').config();

import express from "express"
import { connectToMongoDB } from "./db"
import {router as wordRouter} from "./routes/word.route"
import {router as playerRouter} from "./routes/player.route"

const app = express()

app.use(express.json())

app.use("/api/words", wordRouter)

app.use("/api/players", playerRouter)

app.get("/",(req,res)=>{
    res.send("Hello")
})

connectToMongoDB().then(()=>{
    app.listen(3030,()=>{
        console.log("listening to server on port 3030")
    })
})



