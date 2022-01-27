import { DELETE_ITEM } from "../actions";
import { initialState } from "../initial-state";
import { ActionType, ItemType } from "../../types/cartTypes";

interface StateInterface {
  cart: ItemType[];
}

const cartReducer = (
  state: StateInterface = initialState,
  action: ActionType
) => {
  switch (action.type) {
    case DELETE_ITEM:
      return state;
    default:
      return state;
  }
};

export default cartReducer;
