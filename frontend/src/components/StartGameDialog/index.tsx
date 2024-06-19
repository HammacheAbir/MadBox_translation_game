import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { TextField } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const StartGameDialog = ({setPlayerName}:{setPlayerName:any}) => {
  const [open, setOpen] = useState(true);
  const [input, setInput] = useState("");

  const handleClose = () => {
    setPlayerName(input)
    setOpen(false);
  };

  return (
    <>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Welcome to Guess It
        </DialogTitle>
        <DialogContent dividers>
            <Typography gutterBottom>
                Give us your name !
            </Typography>
            <TextField
                value={input}
                onChange={(e:any)=>setInput(e.target.value)}
                variant="outlined"
            />
        </DialogContent>

        <DialogActions>
          <Button disabled={input===""} autoFocus onClick={handleClose}>
            Start Game
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}

export default StartGameDialog
