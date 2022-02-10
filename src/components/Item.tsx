import React from "react";
import { ListItem, ListItemText, TextField } from "@mui/material";
import { ItemType } from "../types/cartTypes";

const Item: React.FC<ItemType> = ({ name, price, quantity }) => {
  return (
    <ListItem>
      <ListItemText primary={name} secondary={price + " €"} />
      <TextField
        type="number"
        label="Quantity"
        id="outlined-size-small"
        defaultValue={quantity}
        size="small"
      />
    </ListItem>
  );
};

export default Item;
