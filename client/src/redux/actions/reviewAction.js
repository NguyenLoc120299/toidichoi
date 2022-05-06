import { getDataAPI, postDataAPI } from "../../untils/fetchData"
import { uploadImage } from "../../untils/uploadImage"
import { ALERT_ACTION } from "./alertAction"
import { checkLogin } from "./authAction"


export const REVIEW_ACTIONS = {
    LIST_REVIEW_PLACE: "LIST_REVIEW_PLACE"
}

export const createReview = (place, formData, images, rate, auth) => async (dispatch) => {
    try {
        if (dispatch(checkLogin(auth))) {
            dispatch({
                type: ALERT_ACTION.ALERT,
                payload: {
                    loading: true
                }
            })
            const rv_img = await uploadImage(images)
            const res = await postDataAPI('review', {
                ...formData,
                images: rv_img,
                rateNumber: rate,
                placeId: place._id
            }, auth.token)
            dispatch({
                type: ALERT_ACTION.ALERT,
                payload: {
                    success: res.data.msg
                }
            })
        }
    } catch (error) {
        dispatch({
            type: ALERT_ACTION.ALERT,
            payload: {
                err: error.response.data.msg
            }
        })
    }

}

export const getReviewByPlace = (placeId) => async (dispatch) => {
    try {
        if (placeId) {
            const res = await getDataAPI(`list-review/${placeId}`)
            if (res && res.data)
                dispatch({
                    type: REVIEW_ACTIONS.LIST_REVIEW_PLACE,
                    payload: res.data.review
                })
        }
    } catch (error) {
        dispatch({
            type: ALERT_ACTION.ALERT,
            payload: {
                err: error.response.data.msg
            }
        })
    }
}