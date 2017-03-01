export default function reducer(state = {
    user: {
        Id: null,
        nickName: '',
        goingOn: '',
        backPic: '',
        headPic: '',
        work: '',
        school: '',
        birthday: null,
        userData: {
            dinllons: 120,
            activities: 55,
            friends: 12,
            appraises: 34,
            dislikes: 10,
        },
        mobile: '',
        wechat: '',
        hobby: '',
    },
    editingUser: {

    },
    isOwn: true,
    enableEdit: false
}, action) {
    switch (action.type) {
        case 'GET_PROFILE':
            return {
                ...state,
                user: action.payload.user,
                isOwn: action.payload.isOwn
            };

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
        default:
            return state;
    }
}