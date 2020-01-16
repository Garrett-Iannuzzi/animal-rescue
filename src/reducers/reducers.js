import { combineReducers } from 'redux';
import { animals } from './animals';
import { isLoading } from './isLoading';
import { hasError } from './hasError';

const rootReducer = combineReducers({
  animals,
  isLoading,
  hasError
});

export default rootReducer;