import { combineReducers } from 'redux';
import gameReducer from './game.reducer';
import applicationReducer from './application.reducer';

const rootReducer = combineReducers({
  application: applicationReducer,
  game: gameReducer
});

export default rootReducer;