export default function reducer(state = {
    user: {
        id: null,
        name: 'test',
        goingOn: 'dont\'t do anything,lala ',
    },
    isAuthorize: true
}, action) {
    switch (action.type) {
        case 'USER_LOGIN':
            return { ...state, fetching: true, user: action.payload }
            break;

        default:
            return state;
    }
}