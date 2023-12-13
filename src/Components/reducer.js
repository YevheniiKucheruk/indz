import { SET_THEME } from './actions';

const initialState = {
  theme: localStorage.getItem('theme') || 'light', 
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME:
      localStorage.setItem('theme', action.payload); 
      return {
        ...state,
        theme: action.payload,
      };
    default:
      return state;
  }
};

export default themeReducer;