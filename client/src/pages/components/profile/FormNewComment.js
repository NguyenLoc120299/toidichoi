import { Box, Avatar, Textarea, Flex, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createComment, updateReviewProfile } from '../../../redux/actions/reviewAction'
import { BoxAvatar } from './styled'
import { useLocation } from 'react-router-dom'
const FormNewComment = ({ item }) => {
    const auth = useSelector(state => state.auth)
    const socket = useSelector(state => state.socket)
    const dispatch = useDispatch()
    const [content, setContent] = useState('')
    const location = useLocation()

    const onSubmitComment = () => {
        dispatch(createComment(auth, content, item._id, item.user._id, location.pathname, socket))

    }
    const keyDownHandler = event => {

        if (event.key === 'Enter') {
            event.preventDefault();
            onSubmitComment()
            setContent('')

        }
    }
    return (
        <Box
            display="flex"
            padding="10px 6px 2px"
        >
            <Avatar src={auth?.user.avatar} name={auth?.user.name} size="sm" />
            <Box
                w={'100%'}
                className={'new_review'}
            >
                <Textarea
                    border={'none'}
                    mb={3}
                    borderBottom={["1px solid #ccc", "none"]}
                    _focus={{
                        boxShadow: 'unset'
                    }}
                    placeholder='Viết bình luận ...'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    onKeyDown={keyDownHandler}
                >

                </Textarea>
                <Flex justifyContent={"end"} mb={3} display={['flex', 'none']}>
                    <Button className='custom_btn' size={'sm'} onClick={onSubmitComment}>Bình luận</Button>
                </Flex>
            </Box>
        </Box>
    )
}

export default FormNewComment