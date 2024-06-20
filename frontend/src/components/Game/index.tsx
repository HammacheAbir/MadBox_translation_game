import Typography from '@mui/material/Typography';
import logo from '../../questions.svg';
import TextField from '@mui/material/TextField';
import {Send,CheckOutlined,ClearOutlined} from '@mui/icons-material';
import { useEffect, useState } from 'react';
import { Button, ButtonGroup, CircularProgress, Stack } from '@mui/material';
import { useGetWord } from './useGetWord';
import { useHints } from './useHints';

const Game = ({ score, setScore,onEndGame }:{score:number, setScore:any, onEndGame:any}) => {
    const [value, setValue] = useState("");
    const [correct, setCorrect] = useState<Boolean | null>(null)
    const [round, setRound] = useState(1)

    const { isLoading, data, status }:any = useGetWord(round)
    const{ 
        variant1, variant2, 
        text1, text2, 
        onClickHint1, onClickHint2
    } = useHints(data)

    useEffect(()=>{
        if(correct!==null) {
            setTimeout(()=>{
                if (correct){
                  setScore(score+1)
                }else{
                  setScore(score - 1)
                }
                setCorrect(null)
                setValue("")
              }
            ,2000)
        }
    },[correct,score,setScore])

    return (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {(isLoading) ?
            <CircularProgress />

            :status==="success" &&
            
            <Stack marginBottom={3} alignItems={"center"} direction={"column"} spacing={2}>
                <Typography color="black" variant="h2" gutterBottom>
                    {data.fr}
                </Typography>
            </Stack>
        }
        <Stack alignItems={"center"} direction={"column"} spacing={2}>

            <Stack direction ="row" spacing={3} >
                <TextField
                    value={value}
                    onChange={(e:any)=>setValue(e.target.value)}
                    variant="outlined"
                />
                <Button 
                    onClick={()=>{
                        setCorrect(value.toLowerCase()===data.en.toLowerCase())
                        setRound(round+1)
                    }} 
                    variant={correct===null?"outlined":"contained"} 
                    color={correct!==null?correct===true?'success':'error':'primary'}
                    size="large"
                    endIcon={correct===null?<Send />:correct===true?<CheckOutlined />:<ClearOutlined />}
                >
                    Verify
                </Button>
            </Stack>
            <Stack direction ="row" spacing={2} >
                <ButtonGroup size="large" aria-label="Large button group">
                    <Button onClick={onClickHint1} variant={variant1} key="one">{text1}</Button>
                    <Button onClick={onClickHint2} variant={variant2} key="two">{text2}</Button>
                </ButtonGroup>
            </Stack>
            <Button color='error' onClick={onEndGame} variant={variant1} key="one">End Game</Button>
        </Stack>
    </header>
    );
}

export default Game;
