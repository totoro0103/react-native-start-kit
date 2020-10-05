import { CLEAR_NETWORK_FAIL, SEND_NETWORK_FAIL } from '../actions/share';

const initialState = {
  sendNetworkFail: {
    fetching: false, data: null, err: null,
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_NETWORK_FAIL:
      return {
        err: action.payload.err,
      };
    case CLEAR_NETWORK_FAIL:
      return {
        err: null,
      };
    default:
      return state;
  }
};
