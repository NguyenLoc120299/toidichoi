
import { async } from '@firebase/util';
import { auth } from '../../firebase';
import { patchDataAPI, postDataAPI } from '../../untils/fetchData'
import { uploadImage } from '../../untils/uploadImage';
import { ALERT_ACTION } from './alertAction';
export const AUTH_ACTIONS = {
    AUTH: "AUTH",
    SIGN_UP: 'SIGN_UP',
    REVIEW: 'REVIEW',
    UPDATE: "UPDATE"
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
export const googleLogin = (id_token) => async (dispatch) => {
    try {
        dispatch(
            {
                type: ALERT_ACTION.ALERT,
                payload:
                    { loading: true }
            }
        )
        const res = await postDataAPI('googleLogin', { id_token })
        console.log(res.data.user);
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

export const logout = (token) => async (dispatch) => {
    try {
        localStorage.removeItem('firstLogin')
        await postDataAPI('logout', null, token)
        dispatch({ type: AUTH_ACTIONS.AUTH, payload: {} })
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

export const updateProfile = (username, files, auth) => async (dispatch) => {
    try {
        let avatar
        if (files) {
            avatar = (await uploadImage(files))[0]
            const res = await patchDataAPI('profile', { username, avatar }, auth.token)
            dispatch({
                type: AUTH_ACTIONS.UPDATE,
                payload: res.data
            })
        }else{
            const res = await patchDataAPI('profile', { username,avatar: auth?.user.avatar }, auth.token)
            dispatch({
                type: AUTH_ACTIONS.UPDATE,
                payload: res.data
            })
        }
        
    } catch (error) {
        console.log(error);
        dispatch({
            type: ALERT_ACTION.ALERT,
            payload: {
                error: error.response.data.msg
            }
        })
    }
}

