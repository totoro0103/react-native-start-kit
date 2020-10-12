import { fromJS } from 'immutable';
import { SET_THEME } from '../actions/share';
import { THEMES } from '../../constant/common';

const initialState = {
  themeSettings: THEMES.SYSTEM,
};

export default (state = fromJS(initialState), action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_THEME:
      return state.setIn(['themeSettings'], payload);
    default:
      return state;
  }
};
