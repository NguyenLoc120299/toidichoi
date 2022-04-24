import React from 'react'
import { useToast } from '@chakra-ui/react'
const Toast = () => {
    const toast = useToast()
    return (
        toast({
            title: 'Account created.',
            description: "",
            status: 'success',
            duration: 5000,
            isClosable: true,
        })
    )
}

export default Toast