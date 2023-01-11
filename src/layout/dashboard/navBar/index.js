import { Drawer } from '@mui/material';
import React from 'react';
const NAVBAR_WIDTH = '240px'
const NavBar = () => {
    return (
        <Drawer
        anchor="left"
        variant="permanent"
        PaperProps={{ sx: { width: NAVBAR_WIDTH, backgroundColor: 'wheat' } }}
      >
        This is nav bar
      </Drawer>
    );
};

export default NavBar;