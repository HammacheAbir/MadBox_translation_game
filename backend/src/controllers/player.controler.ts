
import {getBestPlayers, insertPlayer} from "../services/player.service"

export const listBestPlayers = async (req,res)=>{
    try {
        const bestPlayers = await getBestPlayers();
        res.status(200).json(bestPlayers)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}

export const addPlayerToLeaderboard = async (req,res)=>{
    try {
        const player = await insertPlayer(req.body);
        res.status(200).json(player)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}