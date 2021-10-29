import manifest from '../../app.json';
import { INIT_APPLICATION } from '../actions/application.actions';

const { expo: { name, version } } = manifest;

const initialState = {
  status: false,
  version: -1,
};

const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_APPLICATION: {
      return {
        status: true,
        version,
        name
      }
    }

    default: {
      return state;
    }
  }
};

export default applicationReducer;