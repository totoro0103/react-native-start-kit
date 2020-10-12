import { combineReducers } from 'redux-immutable';
import share from './share';
import auth from './auth';

const rootReducer = combineReducers({ share, auth });
export default rootReducer;
