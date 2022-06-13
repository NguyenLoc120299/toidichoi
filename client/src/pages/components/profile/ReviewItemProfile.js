import { Box } from '@chakra-ui/react'
import React from 'react'
import ReviewAction from './ReviewAction'
import FormNewComment from './FormNewComment'
import ReviewBody from './ReviewBody'
import ReviewHeader from './ReviewHeader'
import ListReviewReply from './ListReviewReply'
const ReviewItem = ({ reviewItem }) => {
    return (
        <Box>
            <Box paddingBottom={'4px'}>
                <ReviewHeader item={reviewItem} />
                <ReviewBody item={reviewItem} />
                <ReviewAction />
                <FormNewComment />
                <ListReviewReply />
            </Box>
        </Box>
    )
}

export default ReviewItem