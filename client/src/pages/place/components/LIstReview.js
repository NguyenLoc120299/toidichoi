import { Avatar, Box, Flex, Stack } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getReviewByPlace } from '../../../redux/actions/reviewAction'
import ReviewItem from './ReviewItem'

const LIstReview = ({ item }) => {
    const dispatch = useDispatch()
    const { list_review_place } = useSelector(state => state.review)
    useEffect(() => {
        if (item) {
            dispatch(getReviewByPlace(item._id))
        }
    }, [item, dispatch])
    return (
        <Box p={5}>
            {
              list_review_place.map(item=>(
                    <ReviewItem key={item._id} review={item}/>
                ))
            }    
        </Box>
    )
}

export default LIstReview