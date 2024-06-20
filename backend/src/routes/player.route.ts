import express, { Router } from "express"
import {listBestPlayers,addPlayerToLeaderboard} from "../controllers/player.controler"

export const router:Router = express.Router() 

router.get("/leaderboard",listBestPlayers)

router.post("/",addPlayerToLeaderboard)