import { combineReducers } from 'redux'; 
import attorneyReducer from './attorneyReducer';
import clientReducer from './clientReducer';
import userReducer from './userReducer';

export default combineReducers({
    attorneyReducer,
    clientReducer,
    userReducer
});