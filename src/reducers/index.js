import { combineReducers } from 'redux';
import kitchenReducer from './kitchen';

export default combineReducers({
  kitchenReducer: kitchenReducer,
});
