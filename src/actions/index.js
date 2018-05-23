export const ADD_PROJECT = 'ADD_PROJECT';
export const addProject = project => ({
	type: ADD_PROJECT,
	project
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

export const FETCH_BOARD_SUCCESS = 'FETCH_BOARD_SUCCESS';
export const fetchBoardSuccess = board => ({
    type: FETCH_BOARD_SUCCESS,
    board
});

export const FETCH_REQUEST_SUCCESS = 'FETCH_REQUEST_SUCCESS';
export const fetchRequestSuccess = request => ({
	type: FETCH_REQUEST_SUCCESS,
	request
});

export const FETCH_USER_PROJECTS_SUCCESS = 'FETCH_USER_PROJECTS_SUCCESS';
export const fetchUserProjectsSuccess = projects => ({
	type: FETCH_USER_PROJECTS_SUCCESS,
	projects
});

export const POST_NEW_PROJECTS_SUCCESS = 'POST_NEW_PROJECTS_SUCCESS';
export const postNewProjectSuccess = project => ({
	type: postNewProjectSuccess,
	project
});

export const PUT_COLLABORATOR_SUCCESS = 'PUT_COLLABORATOR_SUCCESS';
export const putCollaboratorSuccess = collab => ({
	type: PUT_COLLABORATOR_SUCCESS,
	collab
});

export const DELETE_REQUEST_SUCCESS = 'DELETE_REQUEST_SUCCESS';
export const deleteRequestSuccess = request => ({
	type: DELETE_REQUEST_SUCCESS,
	request
});