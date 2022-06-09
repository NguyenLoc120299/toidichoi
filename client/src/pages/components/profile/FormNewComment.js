import { Box } from '@chakra-ui/react'
import React from 'react'
import { BoxAvatar } from './styled'

const FormNewComment = () => {
    return (
        <Box
            display="flex"
            padding="10px 6px 2px"
        >
            <BoxAvatar />
            <Box
                w={'100%'}
            >
                <textarea className='new_review'
                    placeholder='Viết bình luận ...'
                >

                </textarea>
            </Box>
        </Box>
    )
}

export default FormNewComment