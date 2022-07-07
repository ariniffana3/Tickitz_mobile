import {combineReducers} from 'redux';

import counter from './conter';
import profile from './profile';

export default combineReducers({
  counter,
  profile,
});
