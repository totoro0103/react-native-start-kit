export const SEND_NETWORK_FAIL = 'SEND_NETWORK_FAIL';
export const CLEAR_NETWORK_FAIL = 'CLEAR_NETWORK_FAIL';
export const SET_THEME = 'SET_THEME';

export const sendNetworkFail = (err) => ({ type: SEND_NETWORK_FAIL, payload: { err } });
export const clearNetworkFail = () => ({ type: CLEAR_NETWORK_FAIL });
export const setTheme = (theme) => ({ type: SET_THEME, payload: theme });
