import { async } from "@firebase/util"
import axios from "axios"
import { getDataAPI, patchDataAPI, postDataAPI } from "../../untils/fetchData"
import { uploadImage } from "../../untils/uploadImage"
import { ALERT_ACTION } from "./alertAction"
import { AUTH_ACTIONS, checkLogin } from "./authAction"


export const REVIEW_ACTIONS = {
    LIST_REVIEW_PLACE: "LIST_REVIEW_PLACE",
    UPDATE_REVIEW_PLACE: "UPDATE_REVIEW_PLACE",
    UPDATE_COMMENT_REVIEW: "UPDATE_COMMENT_REVIEW",
    LISTS_ALL_REVIEWS: "LISTS_ALL_REVIEWS",
    UPDATE_REVIEW_PROFILE: "UPDATE_REVIEW_PROFILE"
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

export const likeReview = (auth, review) => async (dispatch) => {
    try {
        await patchDataAPI(`review/${review._id}/like`, null, auth.token)
        const newReview = { ...review, likes: [...review.likes, auth.user._id] }
        dispatch({
            type: REVIEW_ACTIONS.UPDATE_REVIEW_PLACE,
            payload: newReview
        })
    } catch (error) {
        dispatch({
            type: ALERT_ACTION.ALERT,
            payload: {
                err: error.response.data.msg
            }
        })
    }
}

export const unLikeReview = (auth, review) => async (dispatch) => {
    try {
        await patchDataAPI(`review/${review._id}/unlike`, null, auth.token)
        const newReview = { ...review, likes: review.likes.filter(like => like !== auth.user._id) }
        dispatch({
            type: REVIEW_ACTIONS.UPDATE_REVIEW_PLACE,
            payload: newReview
        })

    } catch (error) {
        dispatch({
            type: ALERT_ACTION.ALERT,
            payload: {
                err: error.response.data.msg
            }
        })
    }
}

export const createComment = (auth, content, reviewId, reviewUserId, location) => async (dispatch) => {
    try {
        const res = await postDataAPI('comment', {
            content, reviewId, reviewUserId
        }, auth.token)
        if (location === '/profile') {
            if (res && res.data) {

                dispatch({
                    type: REVIEW_ACTIONS.UPDATE_REVIEW_PROFILE,
                    payload: res.data.newComment
                })
            }
        }
        else if (location === '/explore') {
            console.log(1);
        } else
            if (res && res.data) {
                dispatch({
                    type: REVIEW_ACTIONS.UPDATE_COMMENT_REVIEW,
                    payload: { ...res.data.newComment, user: auth.user }
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

export const getReviewByAuth = (auth) => async (dispatch) => {
    try {

        const res = await getDataAPI('/list-reviews', auth.token)
        console.log(res);
        if (res.data)
            dispatch({
                type: AUTH_ACTIONS.REVIEW,
                payload: res.data
            })
    } catch (error) {
        dispatch({
            type: ALERT_ACTION.ALERT,
            payload: {
                err: error.response.data.msg
            }
        })
    }
}

export const getListAllReviews = () => async (dispatch) => {
    try {
        const res = await getDataAPI('listAll-reviews')
        if (res && res.data)
            dispatch({
                type: REVIEW_ACTIONS.LISTS_ALL_REVIEWS,
                payload: res.data
            })
    } catch (error) {
        dispatch({
            type: ALERT_ACTION.ALERT,
            payload: {
                err: error.response.data.msg
            }
        })
    }
}
export const updateReviewProfile = (item, content) => dispatch => {
    try {
        console.log(item);
    } catch (error) {
        dispatch({
            type: ALERT_ACTION.ALERT,
            payload: {
                err: error.response.data.msg
            }
        })
    }
}