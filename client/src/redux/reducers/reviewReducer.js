import { EditData } from "../actions/imageAction";
import { REVIEW_ACTIONS } from "../actions/reviewAction";


const initialState = {
    list_review_place: [],
    result: 0,
    explore: []
}

const categoryReducer = (state = initialState, action) => {

    switch (action.type) {
        case REVIEW_ACTIONS.LIST_REVIEW_PLACE:
            return {
                ...state,
                list_review_place: action.payload
            };
        case REVIEW_ACTIONS.UPDATE_REVIEW_PLACE:
            return {
                ...state,
                list_review_place: EditData(state.list_review_place, action.payload._id, action.payload)
            }
        case REVIEW_ACTIONS.UPDATE_COMMENT_REVIEW:
            const review = state.list_review_place.find(item => item._id === action.payload.reviewId)
            const newReview = { ...review, comments: [...review.comments, action.payload] }
            return {
                ...state,
                list_review_place: EditData(state.list_review_place, action.payload.reviewId, newReview)
            }
        case REVIEW_ACTIONS.LISTS_ALL_REVIEWS:
            return {
                ...state,
                explore: action.payload
            }
        default:
            return state;
    }
}


export default categoryReducer
