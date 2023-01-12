import { Box, Drawer, Grid, Slider, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShuffleIcon from "@mui/icons-material/Shuffle";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";
import RepeatIcon from "@mui/icons-material/Repeat";

import MicIcon from '@mui/icons-material/Mic';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import DevicesIcon from '@mui/icons-material/Devices';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

import './style.css'

const PLAYINGBAR_HEIGHT = "90px";
const PlayingBar = () => {
  const [liked, setLiked] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState('100');
  const handleClick = () => {
    setLiked(!liked);
  };
  return (
    <Drawer
      anchor="bottom"
      variant="permanent"
      PaperProps={{
        sx: {
          height: PLAYINGBAR_HEIGHT,
          backgroundColor: "grey",
          padding: "17px",
          boxSizing: "border-box",
          overflow: "hidden",
        },
      }}
    >
      <Grid container>
        <Grid item xs={3}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{ width: "56px", height: "56px", backgroundColor: "pink" }}
            >
              <img alt={""} />
            </Box>
            <Box sx={{ marginX: "10px" }}>
              <Typography>Song Name</Typography>
              <Typography>Artist</Typography>
            </Box>
            <Tooltip
              title={liked ? "Remove from Your Library" : "Add to Your Library"}
              onClick={handleClick}
              id="likedIcon"
            >
              {liked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
            </Tooltip>
          </Box>
        </Grid>
        <Box sx={{flexGrow:1}}/>
        <Grid item xs={5}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <ShuffleIcon />
            <SkipPreviousIcon />
            <Box id="playingIcon" onClick={() => {}}>
              {playing ? <PauseCircleIcon /> : <PlayCircleIcon />}
            </Box>
            <SkipNextIcon />
            <RepeatIcon />
          </Box>
          <Slider>

          </Slider>
        </Grid>
        <Box sx={{flexGrow:1}}/>
        <Grid xs={3}>
          <Box sx={{display: 'flex', alignItems:'center', height: '100%', justifyContent: 'space-between'}}>
            <MicIcon/>
            <QueueMusicIcon/>
            <DevicesIcon/>
            {volume === 0? <VolumeMuteIcon/>: volume > 50 ? <VolumeUpIcon/>: <VolumeDownIcon/>}
            <Slider size="small" disableSwap sx={{width:'50%'}}/>
          </Box>
        </Grid>
      </Grid>
    </Drawer>
  );
};

export default PlayingBar;
