const API_BASE_URL = 'http://localhost:8080';


// *** fetch the signed in user info / dashbaord***
export const FETCH_LOGIN_USER_SUCCESS = 'FETCH_LOGIN_USER_SUCCESS';
export const fetchLoginUserSuccess = mainUser => ({
    type: FETCH_LOGIN_USER_SUCCESS,
    mainUser
});

export const fetchLoginUser = (id) => dispatch => {
    fetch(`${API_BASE_URL}/api/users/loginuser/${id}`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then( user => {
            dispatch(fetchLoginUserSuccess(user));
            dispatch(fetchGithubRepo(user.githubRepos));
        });
}; 

// **** fetch the github repo / dashboard ****
export const FETCH_GITHUB_REPO_SUCCES = 'FETCH_GITHUB_REPO_SUCCES';
export const fetchGithubRepoSuccess = githubRepo => ({
    type: FETCH_GITHUB_REPO_SUCCES,
    githubRepo
});

export const fetchGithubRepo = (url) => dispatch => {
    fetch(url)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            console.log(res);
            return res.json();
        })
        .then( repo => {
            dispatch(fetchGithubRepoSuccess(repo));
        });
};



// **** fetch the user's projects / dashbaord ****
export const FETCH_USER_PROJECTS_SUCCESS = 'FETCH_USER_PROJECTS_SUCCESS';
export const fetchUserProjectsSuccess = userRepo => ({
    type: FETCH_USER_PROJECTS_SUCCESS,
    userRepo
});

export const fetchUserProjects = (id) => dispatch => {
    fetch(`${API_BASE_URL}/api/projects/own/${id}`)
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

// **** Post a New Project / dashboard***
export const POST_NEW_PROJECTS_SUCCESS = 'POST_NEW_PROJECTS_SUCCESS';
export const postNewProjectSuccess = userRepo => ({
    type: POST_NEW_PROJECTS_SUCCESS,
    userRepo
});

export const fetchPostProject = (data) => dispatch => {
    fetch(`${API_BASE_URL}/api/projects`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then( newProject => {
            dispatch(postNewProjectSuccess(newProject));
        });
}; 

// **** fetch all login user requests / request ****
export const FETCH_REQUEST_SUCCESS = 'FETCH_REQUEST_SUCCESS';
export const fetchRequestSuccess = request => ({
    type: FETCH_REQUEST_SUCCESS,
    request
});

export const fetchRequests = (id) => dispatch => {
    fetch(`${API_BASE_URL}/api/requests/${id}`)
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


// *** const fetch delete requst / reqest ***
export const FETCH_DELETE_REQUEST_SUCCESS = 'FETCH_DELETE_REQUEST_SUCCESS';
export const fetchDeleteRequestSuccess = request => ({
    type: FETCH_DELETE_REQUEST_SUCCESS,
    request
});

export const fetchDeleteRequest = (id) => dispatch => {
    fetch(`${API_BASE_URL}/api/requests/${id}`, {
        method: 'delete'
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            dispatch(fetchDeleteRequestSuccess(id))
        })
}

// *** festch All Board Projects / board ****
export const FETCH_BOARD_SUCCESS = 'FETCH_BOARD_SUCCESS';
export const fetchBoardSuccess = boardRepo => ({
    type: FETCH_BOARD_SUCCESS,
    boardRepo
});

export const fetchFullBoard= () => dispatch => {
    fetch(`${API_BASE_URL}/api/projects`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(projects => {
            dispatch(fetchBoardSuccess(projects));
        });
}; 


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
