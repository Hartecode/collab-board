import {createStore,  applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import collabBoardReducer from './reducers/index';

export default createStore(collabBoardReducer, applyMiddleware(thunk));
