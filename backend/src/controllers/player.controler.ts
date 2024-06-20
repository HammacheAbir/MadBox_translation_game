
import {getBestPlayers, insertPlayer} from "../services/player.service"
import { Request, Response } from "express";

export const listBestPlayers = async (req:Request,res:Response)=>{
    await getBestPlayers().then((bestPlayers:any)=>{
        res.status(200).json(bestPlayers)
    }).catch((error:Error)=>{
        res.status(500).json({message:error.message})
    })
}

export const addPlayerToLeaderboard = async (req:Request,res:Response)=>{
    await insertPlayer(req.body).then((player:any)=>{
        res.status(200).json(player)
    }).catch((error:Error)=>{
        res.status(500).json({message:error.message})
    })
}