export default function reducer(state = {
    user: {
        id: null,
        name: 'Dinlloner',
        goingOn: 'dont\'t do anything'
    },
    isAuthorize: false
}, action) {
    switch (action.type) {
        case 'USER_LOGIN':
            return {
                ...state,
                
                user: action.payload
            }
            break;

        default:
            return state;
    }
}