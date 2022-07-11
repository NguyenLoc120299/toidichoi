import { AUTH_ACTIONS } from "../actions/authAction";
import { EditData } from "../actions/imageAction";
import { REVIEW_ACTIONS } from "../actions/reviewAction";

const initialState = {}

const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ACTIONS.AUTH:
            return action.payload
        case AUTH_ACTIONS.REVIEW:
            return {
                ...state,
                reviews: action.payload.dataReview,
                status: {
                    totalReview: action.payload.dataReview.length,
                    countLikes: action.payload.countLikes,
                    countComments: action.payload.countComments,
                    dateJoin: state.user.createdAt
                }
            }
        case AUTH_ACTIONS.UPDATE:

            return {
                ...state,
                user: action.payload.newUser
            }
        case REVIEW_ACTIONS.UPDATE_REVIEW_PROFILE:
            const review = state.reviews.find(item => item._id === action.payload.reviewId)
            const newReview = { ...review, comments: [...review.comments, action.payload] }
            return {
                ...state,
                reviews: EditData(state.reviews, action.payload.reviewId, newReview)
            }
        default:
            return state;
    }
}


export default alertReducer