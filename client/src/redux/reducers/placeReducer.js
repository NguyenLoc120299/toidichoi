import { PLACE_ACTIONS } from "../actions/placeAction";

const initialState = {
    loading: false,
    data: [],
    result: 0,
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case PLACE_ACTIONS.GET_PLACES:
            return {
                ...state,
                data: [...action.payload.places],
                result: action.payload.result
            }
        default:
            return state;
    }
}


export default categoryReducer
