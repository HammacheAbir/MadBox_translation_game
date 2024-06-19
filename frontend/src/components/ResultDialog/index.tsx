import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useEffect, useState } from 'react';

const ResultDialog = ({score, setScore}:{score:number, setScore:any}) => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("")
  const [title, setTitle] = useState("")

  useEffect(()=>{
    if(score===20){
        setOpen(true)
        setText("You win!")
        setTitle("Do you want to continue?")
    }
    if(score===0){
        setOpen(true)
        setText("Game over")
        setTitle("Do you want to restart?")
    }
  },[score])

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {text}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{window.location.reload() }}>No</Button>
          <Button onClick={()=>{
            if(score===0) setScore(10)
            handleClose()
          }} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default ResultDialog
