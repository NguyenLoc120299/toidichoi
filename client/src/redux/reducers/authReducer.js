import { AUTH_ACTIONS } from "../actions/authAction";

const initialState = {}

const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ACTIONS.AUTH:
            return action.payload
        case AUTH_ACTIONS.REVIEW:
            return {
                ...state,
                reviews: action.payload
            }
        default:
            return state;
    }
}


export default alertReducer