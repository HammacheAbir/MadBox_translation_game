import express, { Router } from "express"
import {listBestPlayers,addPlayerToLeaderboard} from "../controllers/player.controler"
import { validateRequest } from "../middlewares/validation"
import {z} from "zod"

export const router:Router = express.Router() 

router.get("/leaderboard",listBestPlayers)

router.post("/",addPlayerToLeaderboard
)