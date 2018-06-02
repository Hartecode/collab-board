const API_BASE_URL = 'http://localhost:8080';

export const ADD_PROJECT = 'ADD_PROJECT';
export const addProject = project => ({
	type: ADD_PROJECT,
	project
});

export const VIEW_PROJECT = 'VIEW_PROJECT'
export const viewProject = selectedProject => ({
    type: VIEW_PROJECT,
    selectedProject
});

export const ADD_REQUEST = 'ADD_REQUEST';
export const addRequest = request => ({
	type: ADD_REQUEST,
	request
});

export const APPROVE_REQUEST = 'APPROVE_REQUEST';
export const approveRequest = request => ({
	type: APPROVE_REQUEST,
	request
});

export const DENY_REQUEST = 'DENY_REQUEST';
export const denyRequest = request => ({
	type: DENY_REQUEST,
	request
});

export const LOG_IN = 'LOG_IN';
export const logIn = access => ({
	type: LOG_IN,
	access
});

export const LOG_OUT = 'LOG_OUT';
export const logOut = leave => ({
	type: LOG_OUT,
	leave
});

// *** fetch the signed in user info ***
export const FETCH_LOGIN_USER_SUCCESS = 'FETCH_LOGIN_USER_SUCCESS';
export const fetchLoginUserSuccess = mainUser => ({
    type: FETCH_LOGIN_USER_SUCCESS,
    mainUser
});

export const fetchLoginUser = () => dispatch => {
    fetch(`http://localhost:8080/api/users/loginuser`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            console.log(res);
            return res.json();
        })
        .then( user => {
            dispatch(fetchLoginUserSuccess(user));
            console.log(user);
        });
}; 

//*** festch All projects ****
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';
export const fetchProjectsSuccess = projects => ({
    type: FETCH_PROJECTS_SUCCESS,
    projects
});

export const fetchAllProjects= () => dispatch => {
    fetch(`${API_BASE_URL}/api/projects`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(projects => {
            dispatch(fetchProjectsSuccess(projects));
        });
}; 

// **** fetch all user requests ****
export const FETCH_REQUEST_SUCCESS = 'FETCH_REQUEST_SUCCESS';
export const fetchRequestSuccess = request => ({
	type: FETCH_REQUEST_SUCCESS,
	request
});

export const fetchRequests = () => dispatch => {
    fetch(`${API_BASE_URL}/api/requests/:id`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(request => {
            dispatch(fetchRequestSuccess(request));
        });
}; 

// **** fetch the user's projects ****
export const FETCH_USER_PROJECTS_SUCCESS = 'FETCH_USER_PROJECTS_SUCCESS';
export const fetchUserProjectsSuccess = projects => ({
	type: FETCH_USER_PROJECTS_SUCCESS,
	projects
});

export const fetchUserProjects = () => dispatch => {
    fetch(`${API_BASE_URL}/api/projects/own/:id`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(projects => {
            dispatch(fetchUserProjectsSuccess(projects));
        });
}; 

// **** Post a New Project ***
export const POST_NEW_PROJECTS_SUCCESS = 'POST_NEW_PROJECTS_SUCCESS';
export const postNewProjectSuccess = project => ({
	type: postNewProjectSuccess,
	project
});

// export const fetchBoard = () => dispatch => {
//     fetch(`${API_BASE_URL}/api/projects`)
//         .then(res => {
//             if (!res.ok) {
//                 return Promise.reject(res.statusText);
//             }
//             return res.json();
//         })
//         .then(board => {
//             dispatch(fetchProjectsSucces(board));
//         });
// }; 

export const PUT_COLLABORATOR_SUCCESS = 'PUT_COLLABORATOR_SUCCESS';
export const putCollaboratorSuccess = collab => ({
	type: PUT_COLLABORATOR_SUCCESS,
	collab
});

// export const fetchBoard = () => dispatch => {
//     fetch(`${API_BASE_URL}/api/projects`)
//         .then(res => {
//             if (!res.ok) {
//                 return Promise.reject(res.statusText);
//             }
//             return res.json();
//         })
//         .then(board => {
//             dispatch(fetchProjectsSucces(board));
//         });
// }; 

export const DELETE_REQUEST_SUCCESS = 'DELETE_REQUEST_SUCCESS';
export const deleteRequestSuccess = request => ({
	type: DELETE_REQUEST_SUCCESS,
	request
});

// export const fetchBoard = () => dispatch => {
//     fetch(`${API_BASE_URL}/api/projects`)
//         .then(res => {
//             if (!res.ok) {
//                 return Promise.reject(res.statusText);
//             }
//             return res.json();
//         })
//         .then(board => {
//             dispatch(fetchProjectsSucces(board));
//         });
// }; 