import React from "react";
import { ListItem, ListItemText } from "@mui/material";
import { ItemType } from "../types/cartTypes";

const Item: React.FC<ItemType> = ({ name, price, quantity }) => {
  return (
    <ListItem>
      <ListItemText primary={name} secondary={price + " €"} />
      <ListItemText primary={quantity} />
    </ListItem>
  );
};

export default Item;
