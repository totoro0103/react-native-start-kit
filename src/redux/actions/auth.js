import storage from '../../utils/helpers/storage';

export const authActions = Object.freeze({
  AUTH_SIGN_IN_REQUEST: 'auth.AUTH_SIGN_IN_REQUEST',
  AUTH_SIGN_IN_REQUEST_SUCCESS: 'auth.AUTH_SIGN_IN_REQUEST_SUCCESS',
  AUTH_SIGN_IN_REQUEST_FAILURE: 'auth.AUTH_SIGN_IN_REQUEST_FAILURE',
  AUTH_SET_DATA_SIGN_IN: 'auth.AUTH_SET_DATA_SIGN_IN',
});

export const setSignInData = ({ accessToken, refreshToken }) => ({
  type: authActions.AUTH_SET_DATA_SIGN_IN,
  payload: {
    accessToken,
    refreshToken,
  },
});

export const signIn = () => (dispatch) => {
  dispatch({ type: authActions.AUTH_SIGN_IN_REQUEST });
  setTimeout(() => {
    dispatch({ type: authActions.AUTH_SIGN_IN_REQUEST_SUCCESS, payload: { accessToken: 'accessToken', refreshToken: 'refreshToken' } });
    storage.set(storage.keys.ACCESS_TOKEN, 'accessToken');
  }, 2000);
};

export const signOut = () => (dispatch) => {
  dispatch(setSignInData({ accessToken: '', refreshToken: '' }));
  storage.remove(storage.keys.ACCESS_TOKEN);
};
