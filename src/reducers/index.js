import * as actions from '../actions';


const initialState = {
    mainUser: {
        id: "5b0cc22a505ed30b390e87b6",
        __v: 0,
        avatarUrl: "https://avatars0.githubusercontent.com/u/20849740?v=4",
        email: "seanharte@live.com",
        githubProfileUrl: "https://github.com/Hartecode",
        githubRepos: "https://api.github.com/users/Hartecode/repos",
        username: "Hartecode"
    },
    userRepo: [
        {
            id: 23434,
            projectName: 'Project Name',
            projectDec: 'Bacon ipsum dolor amet fatback landjaeger turkey bacon tri-tip strip steak sirloin ribeye spare ribs t-bone cow. Beef ribs bacon biltong salami, sirloin tri-tip short loin kevin rump sausage. Kevin pancetta spare ribs boudin pork belly meatloaf tail bresaola jowl drumstick beef short loin tongue pork chop pig. Beef swine frankfurter flank picanha ribeye meatball beef ribs leberkas filet mignon brisket tail. Short loin beef pig fatback. Beef porchetta buffalo strip steak burgdoggen short ribs.',
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
            projectDec: 'Bacon ipsum dolor amet fatback landjaeger turkey bacon tri-tip strip steak sirloin ribeye spare ribs t-bone cow. Beef ribs bacon biltong salami, sirloin tri-tip short loin kevin rump sausage. Kevin pancetta spare ribs boudin pork belly meatloaf tail bresaola jowl drumstick beef short loin tongue pork chop pig. Beef swine frankfurter flank picanha ribeye meatball beef ribs leberkas filet mignon brisket tail. Short loin beef pig fatback. Beef porchetta buffalo strip steak burgdoggen short ribs..',
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
            projectDec: 'Bacon ipsum dolor amet fatback landjaeger turkey bacon tri-tip strip steak sirloin ribeye spare ribs t-bone cow. Beef ribs bacon biltong salami, sirloin tri-tip short loin kevin rump sausage. Kevin pancetta spare ribs boudin pork belly meatloaf tail bresaola jowl drumstick beef short loin tongue pork chop pig. Beef swine frankfurter flank picanha ribeye meatball beef ribs leberkas filet mignon brisket tail. Short loin beef pig fatback. Beef porchetta buffalo strip steak burgdoggen short ribs.',
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
        }
};

export default function collabBoardReducer(state = initialState, action) {
    if(action.type === actions.FETCH_LOGIN_USER_SUCCESS) {
        return Object.assign({}, state, {
            mainUser: action.mainUser
        });
    }
    else if (action.type === actions.VIEW_PROJECT) {
        return Object.assign({}, state, {
            selectedProject: action.selectedProject
        });
    }
    return state
};

