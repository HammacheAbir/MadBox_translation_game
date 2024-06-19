import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { useGetLeaders } from './useGetLeaders';
import { CircularProgress } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const  LeaderBoard =( {open, setOpen}:{open:boolean,setOpen:any}) => {

  const {data:players, isLoading, status } = useGetLeaders()

  const handleClose = () => {
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
          Leaders Board
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>


        <DialogContent dividers>
        {(isLoading) ?
            <CircularProgress />
            :status=="success" &&
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    {players.map((player:{name:string,score:number},key:number)=><>
                        <ListItem sx={{width:"500px"}} key={key} alignItems="flex-start">
                            <ListItemAvatar>
                            <Avatar alt={player.name} src="/static/images/avatar/2.jpg"  />
                            </ListItemAvatar>
                            <ListItemText
                                primary={player.name} 
                                secondary={
                                    <>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        {player.score}
                                    </Typography>
                                    </>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" />
                    </>
                    )}
                </List>
            }
        </DialogContent>

        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}

export default LeaderBoard
