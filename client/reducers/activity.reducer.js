export function reducer(state = {
    openCreate: false,
    openJoin: false
}, action) {
    switch (action.type) {
        case 'OPEN_CREATE_ACTIVITY':
            return {
                ...state,
                openCreate: true,
            };
        case 'OPEN_JOIN_ACTIVITY':
            return {
                ...state,
                openJoin: true,
            };
        case 'CLOSE_ACTIVITY':
            return {
                ...state,
                openCreate: action.payload.openCreate,
                openJoin: action.payload.openJoin,
            }
        default:
            return state;
    }
}