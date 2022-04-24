import { ALERT_ACTION } from "../actions/alertAction";


const initialState = {
    error: '',
    success: ''
}

const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALERT_ACTION.ALERT_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}


export default alertReducer