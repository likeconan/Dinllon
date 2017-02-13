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

export function editActivityContent(data) {
    return {
        type: 'EDIT_ACTIVITY_CONTENT',
        payload: data
    }
}

export function addActivityImage(files) {
    return {
        type: 'ADD_ACTIVITY_IMAGE',
        payload: files
    }
}

export function deleteActivityImage(key) {
    return {
        type: 'DELETE_ACTIVITY_IMAGE',
        payload: key
    }
}

export function addActivity(obj) {
    return {
        type: 'ADD_ACTIVITY',
        payload: obj
    }
}