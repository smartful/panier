import React from "react";
import { AppBar, Box, Typography } from "@mui/material";
import CartList from "./components/CartList";

const App: React.FC = () => {
  return (
    <Box>
      <AppBar position="static">
        <Typography variant="h2" ml={2}>
          Panier
        </Typography>
      </AppBar>
      <CartList />
    </Box>
  );
};

export default App;
