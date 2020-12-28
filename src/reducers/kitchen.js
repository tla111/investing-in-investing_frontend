import { CREATE_KITCHEN, FETCH_ALL_KITCHEN } from '../constants/actionTypes';

const kitchenReducer = (posts = [], action) => {
  switch (action.types) {
    case FETCH_ALL_KITCHEN:
      return action.payload;
    case CREATE_KITCHEN:
      return [...posts, action.payload];
    default:
      return posts;
  }
};

export default kitchenReducer;
