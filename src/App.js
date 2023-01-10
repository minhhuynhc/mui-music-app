import ThemeProvider from "./theme";
import {
  AppBar,
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Drawer,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";

const NAVBAR_WIDTH = '240px'
const array=[1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12]
function App() {
  return (
    <>
      <ThemeProvider>
      <Drawer
        anchor="left"
        variant="permanent"
        PaperProps={{ sx: { width: NAVBAR_WIDTH, backgroundColor: 'wheat' } }}
      >
        This is nav bar
      </Drawer>
      <AppBar
        position="fixed"
        color="primary"
        sx={{ height: "42px", width: `calc(100% - ${NAVBAR_WIDTH})` }}
      >
        <Toolbar>
          <Typography variant="h6">this is header</Typography>
        </Toolbar>
      </AppBar>
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
      <Drawer anchor="bottom" variant="permanent" PaperProps={{sx:{height:'48px', backgroundColor: 'grey'}}}>
        this is the playing bar
      </Drawer>
      </ThemeProvider>
    </>
  );
}

export default App;
