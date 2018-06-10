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
            dispatch(fetchUserProjects(user.id));
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
export const fetchUserProjectsSuccess = userRepos => ({
    type: FETCH_USER_PROJECTS_SUCCESS,
    userRepos
});

export const fetchUserProjects = (userId) => dispatch => {
    fetch(`${API_BASE_URL}/api/projects/own/${userId}`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(projects => {
            console.log(projects);
            dispatch(fetchUserProjectsSuccess(projects));
        });
}; 

// **** Post a New Project / dashboard***
export const POST_NEW_PROJECTS_SUCCESS = 'POST_NEW_PROJECTS_SUCCESS';
export const postNewProjectSuccess = userRepos => ({
    type: POST_NEW_PROJECTS_SUCCESS,
    userRepos
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
export const fetchRequestSuccess = requests => ({
    type: FETCH_REQUEST_SUCCESS,
    requests
});

export const fetchRequests = (userId) => dispatch => {
    fetch(`${API_BASE_URL}/api/requests/${userId}`)
        .then(res => {
            if (!res.ok && res.status != 404 ) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(request => {
            dispatch(fetchRequestSuccess(request));
        });
};

// *** fetch post approved reqest / request *** 
export const fetchPostApprovedRequest = (data, requestID) => dispatch => {
    fetch(`${API_BASE_URL}/api/projects/collab/:projectId`, {
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
            dispatch(fetchDeleteRequestSuccess(requestID))
        });
};

// *** const fetch delete requst / reqest ***
export const FETCH_DELETE_REQUEST_SUCCESS = 'FETCH_DELETE_REQUEST_SUCCESS';
export const fetchDeleteRequestSuccess = request => ({
    type: FETCH_DELETE_REQUEST_SUCCESS,
    request
});

export const fetchDeleteRequest = (requestID) => dispatch => {
    fetch(`${API_BASE_URL}/api/requests/${requestID}`, {
        method: 'delete'
    })
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            dispatch(fetchDeleteRequestSuccess(requestID))
        })
}

// *** fetch All Board Projects / board ****
export const FETCH_BOARD_SUCCESS = 'FETCH_BOARD_SUCCESS';
export const fetchBoardSuccess = boardRepos => ({
    type: FETCH_BOARD_SUCCESS,
    boardRepos
});

export const fetchFullBoard = () => dispatch => {
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

// *** fetch A individual project / Project***
export const FETCH_SINGLE_PROJECT_SUCCESS = 'FETCH_SINGLE_PROJECT_SUCCESS';
export const fetchSingleProjectSuccess = selectedProject => ({
    type: FETCH_SINGLE_PROJECT_SUCCESS,
    selectedProject
});

export const fetchSingleProject = (projectId) => dispatch => {
    fetch(`${API_BASE_URL}/api/projects/${projectId}`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(project => {
            dispatch(fetchSingleProjectSuccess(project));
        });
}; 

export const PUT_COLLABORATOR_SUCCESS = 'PUT_COLLABORATOR_SUCCESS';
export const putCollaboratorSuccess = collab => ({
	type: PUT_COLLABORATOR_SUCCESS,
	collab
});


