export function openCreateDialog() {
    return {
        type: 'OPEN_CREATE_ACTIVITY'
    }
}

export function openJoinDialog() {
    return {
        type: 'OPEN_JOIN_ACTIVITY'
    }
}

export function closeDialog(data) {
    return {
        type: 'CLOSE_ACTIVITY_DIALOG',
        payload: data
    }
}