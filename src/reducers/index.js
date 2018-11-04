import { combineReducers } from 'redux';
import question from './question';
import score from './score'
import user from './user'
import display from './display'

export default combineReducers({
  question,
  score,
  user,
  display
});
