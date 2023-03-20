import {Add_To_Cart, Remove_From_Cart} from './ActionsTypes';

export const addItemToCart = data => ({
  type: Add_To_Cart,
  payload: data,
});

export const removeItemFromCart = index => ({
  type: Remove_From_Cart,
  payload: index,
});
