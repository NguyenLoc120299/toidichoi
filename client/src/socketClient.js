import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NOTIFY_TYPES } from './redux/actions/notifyAction'

const SocketClient = () => {
    const { socket, auth } = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {
        socket.emit('joinUser', auth.user)
    }, [socket, auth.user])

    const spawnNotification = (body, icon, url, title) => {
        let options = {
            body, icon
        }
        let n = new Notification(title, options)

        n.onclick = e => {
            e.preventDefault()
            window.open(url, '_blank')
        }
    }
    useEffect(() => {
        socket.on('createNotifyToClient', msg => {
            dispatch({ type: NOTIFY_TYPES.CREATE_NOTIFY, payload: msg })
            spawnNotification(
                msg.user.username + ' ' + msg.text,
                msg.user.avatar,
                msg.url,
                'V-NETWORK'
            )
        })

        return () => socket.off('createNotifyToClient')
    }, [socket, dispatch])


    useEffect(() => {
        socket.on('removeNotifyToClient', msg => {
            dispatch({ type: NOTIFY_TYPES.REMOVE_NOTIFY, payload: msg })
        })

        return () => socket.off('removeNotifyToClient')
    }, [socket, dispatch])
    return (
        <></>
    )
}

export default SocketClient