import { AUTH_ACTIONS } from "../actions/authAction";

const initialState = {}

const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ACTIONS.AUTH:
            return action.payload
        default:
            return state;
    }
}


export default alertReducer