export const GAME = '[GAME]';
export const GAME_LEVEL = `${GAME} Save game level`;
export const GAME_SCORE = `${GAME} Save game score`;
export const GAME_RESET = `${GAME} Reset game level and score`;

export const saveLevel = ({ level }) => ({
  type: GAME_LEVEL,
  payload: { level }
});

export const saveScore = ({ score }) => ({
    type: GAME_SCORE,
  payload: { score }
});

export const resetGame = () => ({
  type: GAME_RESET,
  payload: {}
});