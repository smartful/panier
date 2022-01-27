import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { List } from "@mui/material";
import Item from "./Item";
import { ItemType } from "../types/cartTypes";

const CartList: React.FC = () => {
  const { cart } = useTypedSelector((state) => ({
    cart: state.cart,
  }));

  return (
    <List dense={true}>
      {cart.cart &&
        cart.cart.map((item: ItemType) => (
          <div key={item.id}>
            <Item
              id={item.id}
              name={item.name}
              price={item.price}
              quantity={item.quantity}
            />
          </div>
        ))}
    </List>
  );
};

export default CartList;
