import {Add_To_Cart, Remove_From_Cart} from '../ActionsTypes';

const reducers = (state = [], actions) => {
  switch (actions.type) {
    case Add_To_Cart:
      return [...state, actions.payload];

    case Remove_From_Cart:
      const deleteArray = state.filter((item, index) => {
        return index !== actions.payload;
      });
      return deleteArray;
    default:
      return state;
  }
};
export default reducers;
