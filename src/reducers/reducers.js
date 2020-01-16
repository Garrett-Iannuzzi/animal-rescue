import { combineReducers } from 'redux';
import { animals } from './animals';
import { isLoading } from './isLoading';
import { hasError } from './hasError';
import { donations } from './donations';

const rootReducer = combineReducers({
  animals,
  isLoading,
  hasError,
  donations
});

export default rootReducer;