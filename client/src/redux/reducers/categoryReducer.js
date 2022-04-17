import { CATEGORY_TYPE } from "../actions/categoriesAction";

const initialState = {
    loading: false,
    data: [],
    result: 0
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORY_TYPE.GET_CATEGORIES:
            return {
                ...state,
                data: [...action.payload.categories],
                result: [action.payload.result]
            }
        default:
            return state;
    }
}


export default categoryReducer
