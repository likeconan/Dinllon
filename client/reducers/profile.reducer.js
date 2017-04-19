export default function reducer(state = {
    pageUser: {
        user: {
            uuid: null,
            nickName: '',
            goingOn: '',
            backPic: '',
            headPic: '',
            work: '',
            school: '',
            birthday: null,
            mobile: '',
            wechat: '',
        },
        moments: [],
        activities: [],
        userData: {
            momentCount: 0,
            activityCount: 0,
            friendCount: 0,
            appraiseCount: 0,
            dislikeCount: 0,
            lateCount: 0
        },
    },
    drawerUser: {
        user: {
            uuid: null,
            nickName: '',
            goingOn: '',
            backPic: '',
            headPic: '',
            work: '',
            school: '',
            birthday: null,
            mobile: '',
            wechat: '',
        },
        moments: [],
        activities: [],
        userData: {
            momentCount: 0,
            activityCount: 0,
            friendCount: 0,
            appraiseCount: 0,
            dislikeCount: 0,
            lateCount: 0
        },
    },
    editingUser: {},
    isOwn: false,
    enableEdit: false,
    openDrawer: false,
}, action) {
    switch (action.type) {
        case 'GET_PROFILE':
            var state = action.payload.isPage ?
                {
                    ...state,
                    pageUser: action.payload.data,
                    editingUser: action.payload.editingUser,
                    isOwn: action.payload.isOwn
                } :
                {
                    ...state,
                    drawerUser: action.payload.data
                }
            return state;
        case 'GET_USER_MOMENTS':
            return {
                ...state,
                moments: action.payload
            };
        case 'GET_USER_ACTIVITIES':
            return {
                ...state,
                activities: action.payload
            };
        case 'SAVE_PROFILE':
            return {
                ...state,
                user: action.payload.user,
                editingUser: action.payload.user,
            }
        case 'TOGGLE_EDIT_PROFILE':
            return { ...state, enableEdit: !state.enableEdit }

        case 'EDIT_NICKNAME':
            return {
                ...state,
                editingUser: {
                    ...state.editingUser, nickName: action.payload
                }
            }

        case 'EDIT_GOINGON':
            return {
                ...state,
                editingUser: {
                    ...state.editingUser, goingOn: action.payload
                }
            }
        case 'EDIT_WORK':
            return {
                ...state,
                editingUser: {
                    ...state.editingUser, work: action.payload
                }
            }
        case 'EDIT_SCHOOL':
            return {
                ...state,
                editingUser: {
                    ...state.editingUser, school: action.payload
                }
            }
        case 'EDIT_BIRTHDAY':
            return {
                ...state,
                editingUser: {
                    ...state.editingUser, birthday: action.payload
                }
            }

        case 'TOGGLE_PROFILE_DRAWER':
            return {
                ...state,
                openDrawer: action.payload.toggle,
                drawerUserId: action.payload.userId
            }
        default:
            return state;
    }
}