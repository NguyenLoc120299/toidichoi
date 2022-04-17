import { CATEGORY_TYPE } from "../actions/categoriesAction";


const initialState = {
    loading: false,
    data: [],
    result: 0,
}

const utitiesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORY_TYPE.GET_UTITIES:
            return {
                ...state,
                data: [...action.payload.utities],
                result: [action.payload.result]
            }
        default:
            return state;
    }
}


export default utitiesReducer
