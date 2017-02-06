export function loading() {
    return {
        type: 'LOADING',
        payload: 'active'
    }
}

export function loaded() {
    return {
        type: 'LOADED',
        payload: 'last'
    }
}