import { PLACE_ACTIONS } from "../actions/placeAction";


const detailPostReducer = (state = {}, action) => {
    switch (action.type) {
        case PLACE_ACTIONS.PLACE_SINGLE:
            return action.payload
        default:
            return state;
    }
}


export default detailPostReducer