<<<<<<< HEAD
import { deleteDataAPI, getDataAPI, postDataAPI } from "../../untils/fetchData"
=======
import { deleteDataAPI, getDataAPI, patchDataAPI, postDataAPI } from "../../untils/fetchData"
>>>>>>> b2f712abb1d77de8ae7b63aadfc97c673c95c40f
import { ALERT_ACTION } from "./alertAction"
import { GLOBALTYPES } from "./globalTypes"

export const NOTIFY_TYPES = {
    GET_NOTIFIES: 'GET_NOTIFIES',
    CREATE_NOTIFY: 'CREATE_NOTIFY',
    REMOVE_NOTIFY: 'REMOVE_NOTIFY',
    UPDATE_NOTIFY: 'UPDATE_NOTIFY',
    UPDATE_SOUND: 'UPDATE_SOUND',
    DELETE_ALL_NOTIFIES: 'DELETE_ALL_NOTIFIES'
}

export const createNotify = (msg, auth, socket) => async (dispatch) => {
    try {
        const res = await postDataAPI('notify', msg, auth.token)
        socket.emit('createNotify', {
            ...res.data.notify,
            user: {
                username: auth.user.username,
                avatar: auth.user.avatar
            }
        })
    } catch (err) {
        console.log(err);
    }
}

export const getNotifies = (token) => async (dispatch) => {
    try {
        const res = await getDataAPI('notifies', token)
        dispatch({ type: NOTIFY_TYPES.GET_NOTIFIES, payload: res.data.notifies })
    } catch (err) {
        console.log(err);
    }
}
<<<<<<< HEAD
export const removeNotify = ({ msg, auth, socket }) => async (dispatch) => {
=======
export const removeNotify = (msg, auth, socket) => async (dispatch) => {
>>>>>>> b2f712abb1d77de8ae7b63aadfc97c673c95c40f
    try {
        await deleteDataAPI(`notify/${msg.id}?url=${msg.url}`, auth.token)
        socket.emit('removeNotify', msg)
    } catch (err) {
<<<<<<< HEAD
        dispatch({ type: GLOBALTYPES.ALERT, payload: { error: err.response.data.msg } })
=======
        console.log(err);
    }
}
export const isReadNotify = ({ msg, auth }) => async (dispatch) => {
    dispatch({ type: NOTIFY_TYPES.UPDATE_NOTIFY, payload: { ...msg, isRead: true } })
    try {
        await patchDataAPI(`/isReadNotify/${msg._id}`, null, auth.token)
    } catch (err) {
        console.log(err);
>>>>>>> b2f712abb1d77de8ae7b63aadfc97c673c95c40f
    }
}