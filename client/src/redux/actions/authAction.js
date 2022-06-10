
import { postDataAPI } from '../../untils/fetchData'
import { ALERT_ACTION } from './alertAction';
export const AUTH_ACTIONS = {
    AUTH: "AUTH",
    SIGN_UP: 'SIGN_UP',
    REVIEW: 'REVIEW'
}

export const signup = (formData) => async (dispatch) => {
    try {
        dispatch(
            {
                type: ALERT_ACTION.ALERT,
                payload:
                    { loading: true }
            }
        )
        const res = await postDataAPI('register', { ...formData })
        dispatch({
            type: ALERT_ACTION.ALERT,
            payload: { success: res.data.msg }
        })
    } catch (error) {
        return dispatch({
            type: ALERT_ACTION.ALERT,
            payload:
            {
                err: error.response.data.msg
            }
        })
    }
}
export const login = (formData) => async (dispatch) => {
    try {
        dispatch(
            {
                type: ALERT_ACTION.ALERT,
                payload:
                    { loading: true }
            }
        )
        const res = await postDataAPI('login', formData)
        dispatch({
            type: AUTH_ACTIONS.AUTH,
            payload: {
                token: res.data.access_token,
                user: res.data.user
            }
        })
        localStorage.setItem("firstLogin", true)
        dispatch({
            type: ALERT_ACTION.ALERT,
            payload: {}
        })
    } catch (error) {
        return dispatch({
            type: ALERT_ACTION.ALERT,
            payload:
            {
                err: error.response.data.msg
            }
        })
    }
}
export const refreshToken = () => async (dispatch) => {
    const firstLogin = localStorage.getItem("firstLogin")
    if (firstLogin) {
        dispatch({ type: ALERT_ACTION.ALERT, payload: { loading: true } })

        try {
            const res = await postDataAPI('refresh_token')
            dispatch({
                type: AUTH_ACTIONS.AUTH,
                payload: {
                    token: res.data.access_token,
                    user: res.data.user
                }
            })

            dispatch({ type: ALERT_ACTION.ALERT, payload: {} })

        } catch (err) {
            dispatch({
                type: ALERT_ACTION.ALERT,
                payload: {
                    error: err.response.data.msg
                }
            })
        }
    }
}

export const logout = () => async (dispatch) => {
    try {
        localStorage.removeItem('firstLogin')
        await postDataAPI('logout')
        window.location.href = "/"
    } catch (err) {
        dispatch({
            type: ALERT_ACTION.ALERT,
            payload: {
            }
        })
    }
}

export const checkLogin = (auth) => (dispatch) => {
    if (auth.token) {
        return true
    }
    else {
        dispatch({
            type: ALERT_ACTION.ALERT,
            payload: {
                modal: true
            }
        })
        return false
    }
}

