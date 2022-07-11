import { Box, Avatar } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createComment, updateReviewProfile } from '../../../redux/actions/reviewAction'
import { BoxAvatar } from './styled'
import { useLocation } from 'react-router-dom'
const FormNewComment = ({ item }) => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [content, setContent] = useState('')
    const location = useLocation()

    const onSubmitComment = () => {
        dispatch(createComment(auth, content, item._id, item.user._id, location.pathname))

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
            <Avatar src={item.user.avatar} name={item.user.name} size="sm" />
            <Box
                w={'100%'}
            >
                <textarea className='new_review'
                    placeholder='Viết bình luận ...'
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    onKeyDown={keyDownHandler}
                >

                </textarea>
            </Box>
        </Box>
    )
}

export default FormNewComment