
import { postDataAPI } from '../../untils/fetchData'
import { ALERT_ACTION } from './alertAction';
export const AUTH_ACTIONS = {
    SIGN_UP: 'SIGN_UP'
}

export const signup = (formData) => async (dispatch) => {
    try {
        const res = await postDataAPI('register', { ...formData })
        console.log(res.data);
    } catch (error) {
        return dispatch({
            type: ALERT_ACTION.ALERT_ERROR,
            payload: error.response.data.msg
        })
    }
}