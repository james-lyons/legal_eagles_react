import { combineReducers } from 'redux'; 
import attorneyReducer from './attorneyReducer';
import clientReducer from './clientReducer';
import userReducer from './userReducer';
import reviewReducer from './reviewReducer';

export default combineReducers({
    attorneyReducer,
    clientReducer,
    userReducer,
    reviewReducer
});