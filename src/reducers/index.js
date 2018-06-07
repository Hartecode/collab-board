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
    userRepo: [
        {
            id: 23434,
            projectName: 'Project Name',
            projectDec: 'Bacon ipsum dolor amet fatback landjaeger turkey bacon tri-tip strip steak sirloin ribeye spare ribs t-bone cow. Beef ribs bacon biltong salami, sirloin tri-tip short loin kevin rump sausage. Kevin pancetta spare ribs boudin pork belly meatloaf tail bresaola jowl drumstick beef short loin tongue pork chop pig.',
            projectLink: 'www.github.com/name/project',
            ownerID: "5b0cc22a505ed30b390e87b6",
            ownerAvatarUrl: "https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg",
            collaborators: [],
            pendingRequest: [
                {
                    userID: 888888
                }
            ]
            
        },
        {
            id: 4447,
            projectName: 'Project Name',
            projectDec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim justo eget aliquet efficitur. Curabitur finibus pellentesque fermentum. Aenean urna magna, maximus sed justo ac, ultrices laoreet odio. Curabitur hendrerit sollicitudin leo id convallis.',
            projectLink: 'www.github.com/name/project',
            ownerID: "5b0cc22a505ed30b390e87b6",
            ownerAvatarUrl: "https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg",
            collaborators: [
                {
                    userID: 5555,
                    avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
                },
                {
                    userID: 5555,
                    avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
                }
            ],
            pendingRequest: [
                {
                    userID: 888888
                }
            ]
            
        },
        {
            id: 58976,
            projectName: 'Project Name',
            projectDec: 'Bacon ipsum dolor amet fatback landjaeger turkey bacon tri-tip strip steak sirloin ribeye spare ribs t-bone cow. Beef ribs bacon biltong salami, sirloin tri-tip short loin kevin rump sausage. Kevin pancetta spare ribs boudin pork belly meatloaf tail bresaola jowl drumstick beef short loin tongue pork chop pig. ',
            projectLink: 'www.github.com/name/project',
            ownerID: 64532,
            ownerAvatarUrl: "https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg",
            collaborators: [
                {
                    userID: "5b0cc22a505ed30b390e87b6",
                    avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
                },
                {
                    userID: 5555,
                    avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
                }
            ],
            pendingRequest: [
                {
                    userID: 888888
                }
            ]
            
        },
        {
            id: 44556647,
            projectName: 'Project Name',
            projectDec: 'Bacon ipsum dolor amet fatback landjaeger turkey bacon tri-tip strip steak sirloin ribeye spare ribs t-bone cow. Beef ribs bacon biltong salami, sirloin tri-tip short loin kevin rump sausage. Kevin pancetta spare ribs boudin pork belly meatloaf tail bresaola jowl drumstick beef short loin tongue pork chop pig.',
            projectLink: 'www.github.com/name/project',
            ownerID: 66666,
            ownerAvatarUrl: "https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg",
            collaborators: [
                {
                    userID: 5555,
                    avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
                },
                {
                    userID: 5555,
                    avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
                }
            ],
            pendingRequest: [
                {
                    userID: 888888
                }
            ]
            
        }
    ],
    requests: [
        {
            id: 272877921,
            projectId: 387274874982,
            projectName: 'Project Name',
            ownerId: 445,
            requesterId: 333,
            requesterName: 'user Name',
            avatarImgUrl: "https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg",
            requestDec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim justo eget aliquet efficitur. Curabitur finibus pellentesque fermentum. Aenean urna magna, maximus sed justo ac, ultrices laoreet odio. Curabitur hendrerit sollicitudin leo id convallis.",
            status: 'Pending'
        },
        {
            id: 8345987,
            projectId: 387274874982,
            projectName: 'Project Name',
            ownerId: 445,
            requesterId: 333,
            requesterName: 'user Name',
            avatarImgUrl: "https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg",
            requestDec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim justo eget aliquet efficitur. Curabitur finibus pellentesque fermentum. Aenean urna magna, maximus sed justo ac, ultrices laoreet odio. Curabitur hendrerit sollicitudin leo id convallis.",
            status: 'Pending'
        },
        {
            id: 890989080,
            projectId: 387274874982,
            projectName: 'Project Name',
            ownerId: 445,
            requesterId: 333,
            requesterName: 'user Name',
            avatarImgUrl: "https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg",
            requestDec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim justo eget aliquet efficitur. Curabitur finibus pellentesque fermentum. Aenean urna magna, maximus sed justo ac, ultrices laoreet odio. Curabitur hendrerit sollicitudin leo id convallis.",
            status: 'Pending'
        }
    ],
    boardRepo: [
            {
                id: 23434,
                projectName: 'Project Name',
                projectDec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim justo eget aliquet efficitur. Curabitur finibus pellentesque fermentum. Aenean urna magna, maximus sed justo ac, ultrices laoreet odio. Curabitur hendrerit sollicitudin leo id convallis.',
                projectLink: 'www.github.com/name/project',
                ownerID: 66666,
                ownerAvatarUrl: "https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg",
                collaborators: [],
                pendingRequest: [
                    {
                        userID: 888888
                    }
                ]
                
            },
            {
                id: 4447,
                projectName: 'Project Name',
                projectDec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim justo eget aliquet efficitur. Curabitur finibus pellentesque fermentum. Aenean urna magna, maximus sed justo ac, ultrices laoreet odio. Curabitur hendrerit sollicitudin leo id convallis.',
                projectLink: 'www.github.com/name/project',
                ownerID: 66666,
                ownerAvatarUrl: "https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg",
                collaborators: [
                    {
                        userID: 5555,
                        avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
                    },
                    {
                        userID: 5555,
                        avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
                    }
                ],
                pendingRequest: [
                    {
                        userID: 888888
                    }
                ]
                
            },
            {
                id: 58976,
                projectName: 'Project Name',
                projectDec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim justo eget aliquet efficitur. Curabitur finibus pellentesque fermentum. Aenean urna magna, maximus sed justo ac, ultrices laoreet odio. Curabitur hendrerit sollicitudin leo id convallis.',
                projectLink: 'www.github.com/name/project',
                ownerID: "5b0cc22a505ed30b390e87b6",
                ownerAvatarUrl: "https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg",
                collaborators: [
                    {
                        userID: 5555,
                        avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
                    },
                    {
                        userID: 5555,
                        avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
                    }
                ],
                pendingRequest: [
                    {
                        userID: 888888
                    }
                ]
                
            },
            {
                id: 89898,
                projectName: 'Project Name',
                projectDec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim justo eget aliquet efficitur. Curabitur finibus pellentesque fermentum. Aenean urna magna, maximus sed justo ac, ultrices laoreet odio. Curabitur hendrerit sollicitudin leo id convallis.',
                projectLink: 'www.github.com/name/project',
                ownerID: 66666,
                ownerAvatarUrl: "https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg",
                collaborators: [
                    {
                        userID: 5555,
                        avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
                    },
                    {
                        userID: 5555,
                        avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
                    }
                ],
                pendingRequest: [
                    {
                        userID: "5b0cc22a505ed30b390e87b6"
                    }
                ]
                
            },
            {
                id: 99999,
                projectName: 'Project Name',
                projectDec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim justo eget aliquet efficitur. Curabitur finibus pellentesque fermentum. Aenean urna magna, maximus sed justo ac, ultrices laoreet odio. Curabitur hendrerit sollicitudin leo id convallis.',
                projectLink: 'www.github.com/name/project',
                ownerID: 66666,
                ownerAvatarUrl: "https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg",
                collaborators: [
                    {
                        userID: 5555,
                        avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
                    },
                    {
                        userID: 5555,
                        avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
                    },
                    {
                        userID: 5555,
                        avatarImgUrl:"http://www.todayifoundout.com/wp-content/uploads/2017/12/myspace-tom.jpg"
                    },
                    {
                        userID: 5555,
                        avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
                    },
                    {
                        userID: 5555,
                        avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
                    },
                    {
                        userID: 5555,
                        avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
                    },
                    {
                        userID: 5555,
                        avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
                    },
                    {
                        userID: 5555,
                        avatarImgUrl:"http://www.todayifoundout.com/wp-content/uploads/2017/12/myspace-tom.jpg"
                    },
                    {
                        userID: 5555,
                        avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
                    },
                    {
                        userID: 5555,
                        avatarImgUrl:"http://www.todayifoundout.com/wp-content/uploads/2017/12/myspace-tom.jpg"
                    },
                    {
                        userID: 64532,
                        avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
                    },
                    {
                        userID: 5555,
                        avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
                    },
                    {
                        userID: 5555,
                        avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
                    },
                    {
                        userID: 5555,
                        avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
                    }
                ],
                pendingRequest: [
                    {
                        userID: 888888
                    }
                ]
                
            }
    ],
    selectedProject: {
        
    },
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
            userRepo: action.userRepo
        });
    }
    else if (action.type === actions.POST_NEW_PROJECTS_SUCCESS) {
        return Object.assign({}, state, {
            userRepo: [...initialState.userRepo, action.userRepo]
        });
    }
    else if (action.type === actions.FETCH_REQUEST_SUCCESS) {
        return Object.assign({}, state, {
            requests: action.requests
        });
    }
    else if (action.type === actions.FETCH_DELETE_REQUEST_SUCCESS) {
        const userRequests = initialState.requests;
        const requestId = action.requests

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
            boardRepo: action.boardRepo
        });
    }

    return state
};

