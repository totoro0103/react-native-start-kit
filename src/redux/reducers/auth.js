import { fromJS } from 'immutable';
import { authActions } from '../actions/auth';

const initialState = {
  signIn: {
    loading: false,
    accessToken: '',
    refreshToken: '',
  },
  signUp: {
    loading: false,
  },
  signOut: {
    loading: false,
  },

};

export default (state = fromJS(initialState), action) => {
  const { type, payload } = action;
  switch (type) {
    case authActions.AUTH_SIGN_IN_REQUEST:
      return state.setIn(['signIn', 'loading'], true);
    case authActions.AUTH_SIGN_IN_REQUEST_SUCCESS:
      return state.setIn(['signIn', 'loading'], false)
        .setIn(['signIn', 'accessToken'], payload.accessToken)
        .setIn(['signIn', 'refreshToken'], payload.refreshToken);
    case authActions.AUTH_SIGN_IN_REQUEST_FAILURE:
      return state.setIn(['signIn', 'loading'], false);
    case authActions.AUTH_SET_DATA_SIGN_IN:
      return state.setIn(['signIn', 'accessToken'], payload.accessToken)
        .setIn(['signIn', 'refreshToken'], payload.refreshToken);
    default:
      return state;
  }
};
