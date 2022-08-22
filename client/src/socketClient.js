import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const SocketClient = () => {
    const { socket, auth } = useSelector(state => state)
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
            console.log(msg);
            spawnNotification(
                msg.user.username + ' ' + msg.text,
                msg.user.avatar,
                msg.url,
                'V-NETWORK'
            )
        })

        return () => socket.off('createNotifyToClient')
    }, [socket])

    return (
        <></>
    )
}

export default SocketClient