import { Box } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllReviews } from '../../../redux/actions/reviewAction'
import FormNewComment from '../profile/FormNewComment'
import ListReviewReply from '../profile/ListReviewReply'
import ReviewAction from '../profile/ReviewAction'
import ReviewBody from '../profile/ReviewBody'
import ReviewHeader from '../profile/ReviewHeader'

const ExploreFee = ({ item }) => {


    return (
        <Box
            padding="12px 16px"
            marginBottom="20px"
            backgroundColor="#fff"
            borderRadius="10px"
            box-shadow="0 2px 8px rgb(0 0 0 / 15%"
        >
            <ReviewHeader item={item} />
            <ReviewBody item={item} />
            <ReviewAction item={item} />
            <FormNewComment item={item} />
            <ListReviewReply item={item} />
        </Box>

    )
}

export default ExploreFee