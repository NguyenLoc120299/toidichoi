import { getDataAPI } from "../../untils/fetchData"

export const CATEGORY_TYPE = {
    GET_CATEGORIES: "GET_CATEGORIES",
    GET_UTITIES: "GET_UTITIES"
}
export const getCategories = () => async (dispatch) => {
    try {
        const res = await getDataAPI('category')
        dispatch({
            type: CATEGORY_TYPE.GET_CATEGORIES,
            payload: {
                categories: res.data,
                result: res.data.length
            }
        })
        const res1 = await getDataAPI('utities')
        dispatch({
            type: CATEGORY_TYPE.GET_UTITIES,
            payload: {
                utities: res1.data,
                result: res1.data.length
            }
        })
    } catch (error) {

    }
}