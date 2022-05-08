import { Box } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import ReviewItem from './ReviewItem'

const LIstReview = () => {
    const list_review_place = useSelector(state => state.review.list_review_place)
    return (
        <Box p={5}>
            {
                list_review_place && list_review_place.map(item => (
                    <ReviewItem key={item._id} review={item} />
                ))
            }
        </Box>
    )
}

export default LIstReview