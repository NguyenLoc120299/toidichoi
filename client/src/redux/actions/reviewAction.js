import { async } from "@firebase/util"
import axios from "axios"
import { getDataAPI, patchDataAPI, postDataAPI } from "../../untils/fetchData"
import { uploadImage } from "../../untils/uploadImage"
import { ALERT_ACTION } from "./alertAction"
import { AUTH_ACTIONS, checkLogin } from "./authAction"
import { createNotify, removeNotify } from "./notifyAction"


export const REVIEW_ACTIONS = {
    LIST_REVIEW_PLACE: "LIST_REVIEW_PLACE",
    UPDATE_REVIEW_PLACE: "UPDATE_REVIEW_PLACE",
    UPDATE_COMMENT_REVIEW: "UPDATE_COMMENT_REVIEW",
    LISTS_ALL_REVIEWS: "LISTS_ALL_REVIEWS",
    UPDATE_REVIEW_PROFILE: "UPDATE_REVIEW_PROFILE",
    LISTS_ALL_REVIEWS_FIRST: "LISTS_ALL_REVIEWS_FIRST",
    UPDATE_REVIEW_PLACE_EXPLORER: "UPDATE_REVIEW_PLACE_EXPLORER",
    UPDATE_COMMENT_REVIEW_EXPLORE: "UPDATE_COMMENT_REVIEW_EXPLORE",
    CALLBACK_REVIEW: "CALLBACK_REVIEW"
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
                type: REVIEW_ACTIONS.CALLBACK_REVIEW,
            })
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
export const likeReview = (auth, review, socket, pathname) => async (dispatch) => {
    try {
        if (dispatch(checkLogin(auth))) {
            dispatch({
                type: ALERT_ACTION.ALERT,
                payload: {
                    loading: true
                }
            })
            const newReview = { ...review, likes: [...review.likes, auth.user._id] }
            if (pathname === '/explore')
                dispatch({
                    type: REVIEW_ACTIONS.UPDATE_REVIEW_PLACE_EXPLORER,
                    payload: newReview
                })
            else
                dispatch({
                    type: REVIEW_ACTIONS.UPDATE_REVIEW_PLACE,
                    payload: newReview
                })
            await patchDataAPI(`review/${review._id}/like`, null, auth.token)
            const msg = {
                id: auth.user._id,
                text: 'thích review của bạn',
                recipients: [review.user._id],
                url: `/review/${review._id}`,
                content: review.content,
                image: review?.images[0]
            }
            dispatch(createNotify(msg, auth, socket))
        }
    } catch (error) {
        console.log(error);
    }
}

export const unLikeReview = (auth, review, socket, pathname) => async (dispatch) => {
    try {
        const newReview = { ...review, likes: review.likes.filter(like => like !== auth.user._id) }
        if (pathname === '/explore')
            dispatch({
                type: REVIEW_ACTIONS.UPDATE_REVIEW_PLACE_EXPLORER,
                payload: newReview
            })
        else
            dispatch({
                type: REVIEW_ACTIONS.UPDATE_REVIEW_PLACE,
                payload: newReview
            })
        await patchDataAPI(`review/${review._id}/unlike`, null, auth.token)
        const msg = {
            id: auth.user._id,
            text: 'bỏ thích review của bạn',
            recipients: [review.user._id],
            url: `/review/${review._id}`,
            content: review.content,
            image: review?.images[0]
        }
        dispatch(removeNotify(msg, auth, socket))
    } catch (error) {
        dispatch({
            type: ALERT_ACTION.ALERT,
            payload: {
                err: error.response.data.msg
            }
        })
    }
}
export const createComment = (auth, content, reviewId, reviewUserId, location, socket) => async (dispatch) => {
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
            dispatch({
                type: REVIEW_ACTIONS.UPDATE_COMMENT_REVIEW_EXPLORE,
                payload: { ...res.data.newComment, user: auth.user }
            })
        } else
            if (res && res.data) {
                dispatch({
                    type: REVIEW_ACTIONS.UPDATE_COMMENT_REVIEW,
                    payload: { ...res.data.newComment, user: auth.user }
                })
            }
        const msg = {
            id: auth.user._id,
            text: 'đã bình luận review của bạn',
            recipients: [reviewUserId],
            url: `/review/${reviewId}`,
            content,
            image: null
        }
        dispatch(createNotify(msg, auth, socket))
    } catch (error) {
        dispatch({
            type: ALERT_ACTION.ALERT,
            payload: {
                err: error.response.data.msg
            }
        })
    }
}
export const getReviewByAuth = (id) => async (dispatch) => {
    try {
        const res = await getDataAPI(`list-reviews/${id}`,)
        if (res && res.data)
            dispatch({
                type: AUTH_ACTIONS.REVIEW,
                payload: res.data
            })
    } catch (error) {
        console.log(error);
    }
}
export const getListAllReviews = (page, limit, typeExplore, auth) => async (dispatch) => {
    try {
        let res
        if (typeExplore === 1)
            res = await getDataAPI(`listAll-reviews?page=${page}&limit=${limit}`)
        else
            res = await getDataAPI(`viewsByFollowing?page${page}&limit=${limit}`, auth.token)
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
export const getListAllReviewsFirst = (page, limit, typeExplore, auth) => async (dispatch) => {
    try {
        let res
        if (typeExplore === 1)
            res = await getDataAPI(`listAll-reviews?page=${page}&limit=${limit}`)
        else
            res = await getDataAPI(`viewsByFollowing`, auth.token)
        console.log(res.data);
        if (res && res.data)
            dispatch({
                type: REVIEW_ACTIONS.LISTS_ALL_REVIEWS_FIRST,
                payload: res.data
            })
    } catch (error) {
        // dispatch({
        //     type: ALERT_ACTION.ALERT,
        //     payload: {
        //         err: error.response.data.msg
        //     }
        // })
        console.log(error);
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