import SceneHome from '../scenes/sceneHome';
import SceneGame from '../scenes/sceneGame';
import SceneSplash from '../scenes/sceneSplash';
import SceneLoading from '../scenes/sceneLoading';

const SCENES = [
  { name: 'Splash', component: SceneSplash },
  { name: 'Loading', component: SceneLoading },
  { name: 'Home', component: SceneHome },
  { name: 'Game', component: SceneGame }
];

export const getSceneByIndex = (index) => SCENES[index] || null;

export const getSceneNameByIndex = (index) => SCENES[index]?.name || null;

export const getSceneComponentByIndex = (index) => SCENES[index]?.component || null;

export const getSceneByName = (name) => {
  for (let x = 0; x < SCENES.length; x++) {
    const currentScene = SCENES[x];

    if (currentScene.toLowerCase() === name.toLowerCase()) return currentScene;
  }

  return null;
};

export const getSceneIndexByName = (name) => {
  for (let x = 0; x < SCENES.length; x++) {
    const currentScene = SCENES[x];

    if (currentScene.toLowerCase() === name.toLowerCase()) return x;
  }

  return -1;
};

export const getSceneComponentByName = (name) => getSceneByName(name)?.component ?? null;

export default SCENES;