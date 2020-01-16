import { combineReducers } from 'redux';
import { animals } from './animals';

const rootReducer = combineReducers({
  animals,
  isLoading,
  hasError

});

export default rootReducer;