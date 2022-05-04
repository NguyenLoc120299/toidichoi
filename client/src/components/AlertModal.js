import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton,
} from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { ALERT_ACTION } from '../redux/actions/alertAction'
const AlertModal = () => {
    const dispatch = useDispatch()
    const { alert } = useSelector(state => state)
    const onCLose = () => {
        dispatch({
            type: ALERT_ACTION.ALERT,
            payload: {}
        })
    }
    return (
        <>
            {alert.err && (
                <div className='alert__modal'>
                    <Alert
                        status='error'>
                        <AlertIcon />
                        <AlertTitle>{alert.err}</AlertTitle>
                        <AlertDescription></AlertDescription>
                        <CloseButton position='absolute' right='0' top='-5px' fontSize={'7px'} onClick={onCLose} />
                    </Alert>
                </div>
            )}
            {alert.success && (
                <div className='alert__modal'>
                    <Alert
                        status='success'>
                        <AlertIcon />
                        <AlertTitle>{alert.success}</AlertTitle>
                        <AlertDescription></AlertDescription>
                        <CloseButton position='absolute' right='0' top='-5px' fontSize={'7px'} onClick={onCLose} />
                    </Alert>
                </div>
            )}
        </>

    )
}

export default AlertModal