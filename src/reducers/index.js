import * as actions from '../actions';


const initialState = {
    mainUser: {
        id: null,
        avatarUrl: null,
        email: null,
        githubProfileUrl: null,
        githubRepos: null,
        username: null
    },
    userRepos: [],
    userCollabs: [],
    requests: [],
    boardRepos: [],
    selectedProject: {},
    githubRepo:[]
};

export default function collabBoardReducer(state = initialState, action) {
    if(action.type === actions.FETCH_LOGIN_USER_SUCCESS) {
        return Object.assign({}, state, {
            mainUser: action.mainUser
        });
    } else if (action.type === actions.FETCH_GITHUB_REPO_SUCCES) {
        return Object.assign({}, state, {
            githubRepo: action.githubRepo
        });
    }
    else if (action.type === actions.FETCH_USER_PROJECTS_SUCCESS) {
        return Object.assign({}, state, {
            userRepos: action.userRepos
        });
    }
    else if (action.type === actions.FETCH_USER_COLLABS_SUCCESS) {
        return Object.assign({}, state, {
            userCollabs: action.userCollabs
        });
    }
    else if (action.type === actions.POST_NEW_PROJECTS_SUCCESS) {
        return Object.assign({}, state, {
            userRepos: [...state.userRepos, action.userRepos]
        });
    }
    else if (action.type === actions.FETCH_REQUEST_SUCCESS) {
        return Object.assign({}, state, {
            requests: action.requests
        });
    }
    else if (action.type === actions.FETCH_DELETE_REQUEST_SUCCESS) {
        const userRequests = state.requests;
        const requestId = action.request

        const newUserRequests = userRequests.filter( obj => {
            const id = obj.id;
            return id != requestId
        })

        
        return Object.assign({}, state, {
            requests: newUserRequests
        });
    }
    else if (action.type === actions.FETCH_BOARD_SUCCESS) {

        return Object.assign({}, state, {
            boardRepos: action.boardRepos
        });
    }
    else if (action.type === actions.FETCH_SINGLE_PROJECT_SUCCESS) {
        console.log(action.selectedProject);
        return Object.assign({}, state, {
            selectedProject: action.selectedProject
        });
    }
    else if (action.type === actions.FETCH_POST_PENDING_REQUEST_SUCCESS) {
        const newPendingUser = action.selectedProjectPending;
        // return Object.assign({}, state, {
        //     selectedProject: {
        //         id: state.selectedProject.id,
        //         projectname: state.selectedProject,
        //         projectDec: state.selectedProject.projectDec,
        //         projectLink: state.selectedProject.projectLink,
        //         ownerID: state.selectedProject.ownerID,
        //         ownerAvatarUrl: state.selectedProject.ownerAvatarUrl,
        //         collaborators: state.selectedProject.collaborators,
        //         pendingRequest: [...state.selectedProject.pendingRequest, newPendingUser]
        //     }
        // });

    }

    return state
};

