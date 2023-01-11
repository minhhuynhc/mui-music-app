import { Drawer } from "@mui/material";
import React from "react";

const PlaingBar = () => {
  return (
    <Drawer
      anchor="bottom"
      variant="permanent"
      PaperProps={{ sx: { height: "48px", backgroundColor: "grey" } }}
    >
      this is the playing bar
    </Drawer>
  );
};

export default PlaingBar;
