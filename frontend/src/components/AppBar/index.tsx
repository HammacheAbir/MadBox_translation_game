import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import { Stack } from '@mui/material';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import ScoreboardOutlinedIcon from '@mui/icons-material/ScoreboardOutlined';


const ResponsiveAppBar = ({setShowLeaderBoard, score, playerName}:{setShowLeaderBoard:any, score:number, playerName:string}) => {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Guess It
          </Typography>

          <Stack spacing={3} justifyContent={"center"} alignItems={"center"} direction={"row"} sx={{ flexGrow: 4}}>
            <Box alignItems={"center"} sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                <Button
                  key={"LeaderBoard"}
                  onClick={()=>setShowLeaderBoard(true)}
                  sx={{ my: 2, color: 'white', display: 'block', alignItems:"center" }}
                >
                  <Stack spacing={1} direction={"row"}>
                    <EmojiEventsOutlinedIcon />
                    <Box>
                      Leader Board
                    </Box>
                  </Stack>
                </Button>

                <Button
                  key={"score"}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  <Stack spacing={1} direction={"row"}>
                    <ScoreboardOutlinedIcon /> 
                    <Box>
                      Score: {score}
                    </Box>
                  </Stack>
                </Button>
            </Box>
          </Stack>

          <Stack spacing={3} justifyContent={"flex-end"} alignItems={"center"} direction={"row"} sx={{ flexGrow: 1 }}>
            
            <Box alignItems={"center"} sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
          
                <Button
                  key={"score"}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {playerName}
                </Button>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title={playerName}>
                <IconButton sx={{ p: 0 }}>
                  <Avatar alt={playerName} src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            </Box>

          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
