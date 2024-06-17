import express from "express"
import {listBestPlayers,addPlayerToLeaderboard} from "../controllers/player.controler"

export const router = express.Router() 

router.get("/leaderboard",listBestPlayers)

router.post("/",addPlayerToLeaderboard)