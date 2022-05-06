import { REVIEW_ACTIONS } from "../actions/reviewAction";


const initialState = {
    list_review_place: [],
    result: 0,
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case REVIEW_ACTIONS.LIST_REVIEW_PLACE:
            return {
                ...state,
                list_review_place:action.payload
            }
        default:
            return state;
    }
}


export default categoryReducer
