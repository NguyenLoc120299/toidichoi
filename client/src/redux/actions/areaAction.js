import { getDataAPI } from "../../untils/fetchData"

export const AREA_TYPE = {
    GET_AREA: "GET_AREA"
}

export const getArea = () => async (dispatch) => {
    try {
        const res = await getDataAPI('area')
        dispatch({
            type: AREA_TYPE.GET_AREA,
            payload: {
                categories: res.data,
                result: res.data.length
            }
        })
    } catch (error) {

    }
}