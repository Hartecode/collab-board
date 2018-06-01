import {
    FETCH_LOGIN_USER_SUCCESS
} from '../actions';


const initialState = {
    mainUser: false
};

export default function collabBoardReducer(state = initialState, action) {
    if(action.type === SEARCH_CHARACTERS_REQUEST) {
        return Object.assign({}, state, {
            mainUser: action.user
        });
    }
    return state
};