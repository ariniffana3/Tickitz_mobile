import {combineReducers} from 'redux';

import counter from './conter';
import profile from './profile';
import booking from './booking';

export default combineReducers({
  counter,
  profile,
  booking,
});
