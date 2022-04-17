import { AREA_TYPE } from "../actions/areaAction";


const initialState = {
    loading: false,
    data: [],
    result: 0,
}

const categoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case AREA_TYPE.GET_AREA:
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
