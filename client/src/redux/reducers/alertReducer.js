import { ALERT_ACTION } from "../actions/alertAction";


const initialState = {}

const alertReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALERT_ACTION.ALERT:
            return action.payload
        case ALERT_ACTION.TOGGLESEARCH:
            return action.payload
        default:
            return state;
    }
}


export default alertReducer