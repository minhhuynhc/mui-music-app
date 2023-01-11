import { Box, Card, CardActionArea, CardContent, CardMedia, Grid } from '@mui/material';
import React from 'react';
const NAVBAR_WIDTH = '240px'
const array=[1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
const HomePage = () => {
    return (
        <Box
        className="center"
        sx={{ position: "fixed", width: `calc(100% - ${NAVBAR_WIDTH})`,height: `calc(100% - ${42}px)`, right: 0, top:'42px', overflow: 'auto' }}
      >   
      <Grid container spacing={2} sx={{padding: 3}}>
        
        {array.map((item) => (
          <Grid item xs={2.4}>
          <Card>
            <CardActionArea>
              <CardMedia/>
              <CardContent>alooooooooooooooooooooooo</CardContent>
            </CardActionArea>
          </Card>
          </Grid>
          ))}
        </Grid>
      </Box>
    );
};

export default HomePage;