import './App.css';
import ResponsiveAppBar from './components/AppBar';
import Game from './components/Game';
import { useState } from 'react';
import LeaderBoard from './components/LeaderBoard';
import StartGameDialog from './components/StartGameDialog';
import ResultDialog from './components/ResultDialog';
import { useAddToHistory } from './components/LeaderBoard/useAddToHistory';


function App() {
  const [score, setScore] = useState(10)
  const [showLeaderBoard, setShowLeaderBoard] = useState(false)
  const [playerName, setPlayerName] = useState("")
  const [endScore, setEndScore] = useState(0)

  useAddToHistory(playerName,endScore)

  const onEndGame = ()=>{
    if(score>20){
      setEndScore(score)
    }
  }

  return (
      <div className="App">
        <ResponsiveAppBar playerName={playerName} score={score} setShowLeaderBoard={setShowLeaderBoard} />
        <Game score={score} setScore={setScore} onEndGame={onEndGame}/>
        <LeaderBoard open={showLeaderBoard} setOpen={setShowLeaderBoard}/>
        <StartGameDialog setPlayerName={setPlayerName}/>
        <ResultDialog score={score} setScore={setScore}/>
      </div>
  );
}

export default App;
