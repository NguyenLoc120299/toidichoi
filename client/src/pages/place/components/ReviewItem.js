import { Avatar, Box, Flex, Heading, Image, Img, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import ReviewReply from '../../../components/ReviewReply'
import { formatTime } from '../../components/helper/moment'
import BoxComment from './BoxComment'
import FormComment from './FormComment'
import ImageLightbox from './ImageLightbox'
import ReviewAction from './ReviewAction'

const ReviewItem = (props) => {
    const [showFormComment, setShowComment] = useState(false)
    return (
        <Box my={5}>
            <Flex w={'100%'} >
                <Box mr={5} display={['none', 'block']}>
                    <Avatar size={props.isComment ? 'md' : 'lg'} name={props.username} src={props.avatar} />
                </Box>
                <Flex
                    direction={'column'}
                    w={['100%', 'calc((100% - 64px) - 20px)']}
                >
                    <BoxComment
                        username={props.username}
                        avatar={props.avatar}
                        content={props.content}
                        createdAt={props.createdAt}
                        images={props.images}
                        id={props.reviewUserId}
                    />

                    <ReviewAction
                        likes={props.likes}
                        comments={props.comments}
                        setShowComment={setShowComment}
                        showFormComment={showFormComment}
                        item={props.review}
                    />
                    {showFormComment &&
                        <FormComment
                            reviewId={props.reviewId}
                            reviewUserId={props.reviewUserId}
                        />}
                    <ReviewReply
                        item={props.comments} />
                </Flex>
            </Flex>

        </Box>
    )
}

export default ReviewItem