import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton,
} from '@chakra-ui/react'
import React from 'react'

const AlertModal = () => {
    return (
        <div className='alert__modal'>
            <Alert
                status='success'>
                <AlertIcon />
                <AlertTitle>Co loi xay ra</AlertTitle>
                <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
                <CloseButton position='absolute' right='8px' top='8px' />
            </Alert>
        </div>
    )
}

export default AlertModal