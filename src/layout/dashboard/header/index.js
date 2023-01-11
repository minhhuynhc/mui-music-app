import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';
const NAVBAR_WIDTH = '240px'
const Header = () => {
    return (
        <AppBar
        position="fixed"
        color="primary"
        sx={{ height: "42px", width: `calc(100% - ${NAVBAR_WIDTH})` }}
      >
        <Toolbar>
          <Typography variant="h6">this is header</Typography>
        </Toolbar>
      </AppBar>
    );
};

export default Header;