export function showImageDialog(images) {
    return {
        type: 'SHOW_IMAGE_DIALOG',
        payload: images ? images : []
    }
}

export function closeDialog() {
    return {
        type: 'CLOSE_DIALOG'
    }
}