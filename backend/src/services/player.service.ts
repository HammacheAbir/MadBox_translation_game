import { Document } from "mongodb";
import { Player } from "../db/models/player.model";

export const getBestPlayers = async () : Promise<Document> => {
    try {
      const bestPlayers:Document = await Player.find().sort({ score: -1 }).limit(5);
      return bestPlayers;
    } catch (err:any) {
      throw new Error(`Error fetching best players: ${err.message}`);
    }
};

export const insertPlayer = async (playerData:{name:string,score:number}):Promise<Document> => {
    try {
      const playerCount = await Player.countDocuments();
  
      if (playerCount < 5) {
        const newPlayer:Document = new Player(playerData);
        await newPlayer.save();
        return newPlayer;
      } else {
        const bestPlayers:Document = await getBestPlayers();
        const lowestBestPlayer:Document = bestPlayers[4];
  
        if (playerData.score > lowestBestPlayer.score) {
          await Player.findByIdAndDelete(lowestBestPlayer._id);
          const newPlayer:Document = new Player(playerData);
          await newPlayer.save();
          return newPlayer;
        } else {
          throw new Error('Player score is not high enough to be in the top 5');
        }
      }
    } catch (err) {
      throw new Error(`Error inserting player: ${err.message}`);
    }
  };

