import { PLACE_ACTIONS } from "../actions/imageAction";

const initialState = {
    loading: false,
    menuImage: [],
    displayImage: [],
    reviewImage:[]
}
const placeReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLACE_ACTIONS.MENU_IMAGE:
            return {
                ...state,
                menuImage: [...action.payload]
            }
        case PLACE_ACTIONS.DISPLAY_IMAGE:
            return {
                ...state,
                displayImage: [...action.payload]
            }
        case PLACE_ACTIONS.REVIEW_IMAGE:
            return {
                ...state,
                reviewImage: [...action.payload]
            }
        default:
            return state;
    }
}
export default placeReducer