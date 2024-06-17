import { Player } from "../db/models/player.model";

export const getBestPlayers = async () => {
    try {
      const bestPlayers = await Player.find().sort({ score: -1 }).limit(5);
      return bestPlayers;
    } catch (err) {
      throw new Error(`Error fetching best players: ${err.message}`);
    }
};


export const insertPlayer = async (playerData) => {
    try {
      const playerCount = await Player.countDocuments();
  
      if (playerCount < 5) {
        const newPlayer = new Player(playerData);
        await newPlayer.save();
        return newPlayer;
      } else {
        const bestPlayers = await getBestPlayers();
        const lowestBestPlayer = bestPlayers[4];
  
        if (playerData.score > lowestBestPlayer.score) {
          await Player.findByIdAndDelete(lowestBestPlayer._id);
          const newPlayer = new Player(playerData);
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

