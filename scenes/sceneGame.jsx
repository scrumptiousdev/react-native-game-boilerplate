import React from 'react';
import { connect } from 'react-redux';
import { Text, Button } from 'react-native';
import backgroundImage from '../assets/game-bg.jpg';
import BackgroundPage from '../components/BackgroundPage';
import { saveScore, resetGame } from '../store/actions/game.actions';

const SceneGame = ({ level, score, saveScoreDispatch, resetGameDispatch }) => (
  <BackgroundPage background={backgroundImage} opacity={0.02}>
    <Text>Play Game</Text>
    <Text>Current Level: {level}</Text>
    <Text>You Score: {score}</Text>
    <Button title='SAVE' onPress={() => saveScoreDispatch(score + 1)} />
    <Button title='RESET' onPress={() => resetGameDispatch()} />
  </BackgroundPage>
);

const mapStateToProps = (state) => ({
  level: state.game.level,
  score: state.game.score,
});

const mapDispatchToProps = (dispatch) => ({
  saveScoreDispatch: (score) => dispatch(saveScore({ score })),
  resetGameDispatch: () => dispatch(resetGame())
});

export default connect(mapStateToProps, mapDispatchToProps)(SceneGame);