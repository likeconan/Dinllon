export function fetchUser() {
    return {
        type: 'GET_USER',
        payload: {
            name: 'Will',
            goingOn: 'haha success'
        }
    }
}