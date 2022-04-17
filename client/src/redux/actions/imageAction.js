export const PLACE_ACTIONS = {
    UPLOAD_IMAGE: "UPLOAD_IMAGE",
    MENU_IMAGE: "MENU_IMAGE",
    DISPLAY_IMAGE: "DISPLAY_IMAGE"

}

export const setImage = (type, newImages) => (dispatch) => {
    dispatch({
        type: type,
        payload: newImages
    })
}