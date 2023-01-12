import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
// import {HomeIcon,SearchIcon, LibraryMusicIcon} from '@mui/icons-material';
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";

import AddBoxIcon from "@mui/icons-material/AddBox";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { flexbox } from "@mui/system";

const NAVBAR_WIDTH = "240px";
const PLAYINGBAR_HEIGHT = "48px";
const NavBar = () => {
  const userPlaylist = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const navbarSections = [
    {
      title: "Home",
      icon: <HomeIcon />,
      path: "",
    },
    {
      title: "Search",
      icon: <SearchIcon />,
      path: "search",
    },
    {
      title: "Your Library",
      icon: <LibraryMusicIcon />,
      path: "playlist",
    },
  ];
  return (
    <Drawer
      anchor="left"
      variant="permanent"
      PaperProps={{
        sx: {
          width: NAVBAR_WIDTH,
          backgroundColor: "wheat",
          height: `calc(100% - ${PLAYINGBAR_HEIGHT})`,
        },
      }}
    >
      <div className="keke">alooo</div>
      <Box
        className="app logo"
        sx={{ height: "65px", backgroundColor: "grey", marginTop: "20px" }}
      >
        Put the logo here
      </Box>
      <List>
        {navbarSections.map((item) => (
          <ListItem disablePadding>
            <ListItemButton component={NavLink} to={`/${item.path}`}>
              <ListItemIcon>{item.icon} </ListItemIcon>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
        <List></List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AddBoxIcon />{" "}
            </ListItemIcon>
            <ListItemText primary="Create Playlist" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Box
                sx={{
                  display: 'flex',
                  background:
                    "linear-gradient(243deg, rgba(68,56,56,1) 0%, rgba(24,7,45,1) 100%)",
                  width: "23px",
                  height: "23px",
                  borderRadius: '5px',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FavoriteIcon color="success" fontSize="" />
              </Box>
            </ListItemIcon>
            <ListItemText primary="Liked Song" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider sx={{ marginX: "20px" }} />
      <List
        className="aloo"
        sx={{
          overflow: "hidden",
          "&::-webkit-scrollbar": {
            width: "10px",
            visibility: "hidden",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "grey",
          },
          "&::-webkit-scrollbar-track": {
            background: "black",
          },
          "&:hover": {
            overflow: "auto",
          },
        }}
      >
        {userPlaylist.map((item) => (
          <>
            <ListItem
              disablePadding
              // sx={{
              //   backgroundColor: 'blue',
              //   "&:hover": {
              //     backgroundColor: "red",
              //   },
              // }}
            >
              <ListItemButton>
                <ListItemText secondary={item} />
              </ListItemButton>
            </ListItem>
          </>
        ))}
      </List>
    </Drawer>
  );
};

export default NavBar;
