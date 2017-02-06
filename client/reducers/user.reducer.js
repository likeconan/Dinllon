export default function reducer(state = {
    user: {
        id: null,
        name: 'test',
        goingOn: 'dont\'t do anything,lala ',
    },
    fetching: false,
    fetched: false,
    error: null,
}, action) {
    switch (action.type) {
        case 'GET_USER':
            return { ...state, fetching: true, user: action.payload }
            break;

        default:
            return state;
    }
}