import { Box } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllReviews } from '../../../redux/actions/reviewAction'

const ExploreFee = () => {
    const dispatch = useDispatch()
    const { listReviews } = useSelector(state => state.review)
    // useEffect(() => {
    //     dispatch(getAllReviews())
    // }, [])

    return (
        <Box
            padding="12px 16px"
            marginBottom="20px"
            backgroundColor="#fff"
            borderRadius="10px"
            box-shadow="0 2px 8px rgb(0 0 0 / 15%"
        >

        </Box>

    )
}

export default ExploreFee