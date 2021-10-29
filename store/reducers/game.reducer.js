import { GAME_LEVEL, GAME_SCORE, GAME_RESET } from '../actions/game.actions';

const initialState = {
  level: 1,
  score: 0
};

const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case GAME_LEVEL: {
      const { level } = action.payload;

      return { ...initialState, level };
    }

    case GAME_SCORE: {
      const { score } = action.payload;

      return { ...initialState, score };
    }

    case GAME_RESET: {
      return initialState;
    }

    default: {
      return state;
    }
  };
};

export default gameReducer;