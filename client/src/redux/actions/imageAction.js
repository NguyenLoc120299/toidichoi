export const PLACE_ACTIONS = {
    UPLOAD_IMAGE: "UPLOAD_IMAGE",
    MENU_IMAGE: "MENU_IMAGE",
    DISPLAY_IMAGE: "DISPLAY_IMAGE",
    REVIEW_IMAGE: "REVIEWIMAGE"
}


export const EditData = (data, id, newData) => {
    const newEdit = data.map(item =>
        (item._id === id ? newData : item)
    )
    return newEdit;
}

export const setImage = (type, newImages) => (dispatch) => {
    dispatch({
        type: type,
        payload: newImages
    })
}