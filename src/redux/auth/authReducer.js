import{SET__USER} from './authType'

const init = {
  user: {},
};

const authReducer = (state = init, action) => {
  switch (action.type) {
    case SET__USER:
      return {
        user: action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
