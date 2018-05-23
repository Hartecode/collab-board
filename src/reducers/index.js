

const initialState = {
    userId: 66666,
    githubId: 38483920,
    userRepositories: [
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
                    
                }
    ],
    repositories : [
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
                    ownerID: 64532,
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
                            userID: 64532
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

            ]
};

export default function collabBoardReducer(state = initialState, action) {
    return state
};