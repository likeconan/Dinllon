export default function reducer(state = {
    user: {
        Id: null,
        nickName: '',
        goingOn: '',
        backPic: '',
        headPic: '',
        userData: {
            dinllons: 120,
            activities: 55,
            friends: 12,
            appraises: 34,
            dislikes: 10,
        },
        mobile: '',
        wechat: '',
        age: 0,
        sex: true,
        hobby: '',
    },
    isOwn: true,
}, action) {
    switch (action.type) {
        case 'GET_PROFILE':
            return { ...state, user: action.payload }
            break;

        default:
            return state;
    }
}