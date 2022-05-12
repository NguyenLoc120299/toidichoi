import { Box, Button, Link } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ReviewItem from './ReviewItem'

const LIstReview = () => {
    const list_review_place = useSelector(state => state.review.list_review_place)
    const [next, setNext] = useState(2)
    const [showReview, setShowReview] = useState([])
    useEffect(() => {
        setShowReview(list_review_place.slice(list_review_place.length - next))
    }, [list_review_place, next])
    return (
        <Box p={5}>
            {
                showReview.map(item => (
                    <ReviewItem
                        key={item._id}
                        avatar={item.user.avatar}
                        comments={item.comments}
                        likes={item.likes}
                        content={item.content}
                        createdAt={item.createdAt}
                        username={item.user.username}
                    />
                ))
            }
            {
                list_review_place.length - next > 0 ?

                    <Link
                        color='red.500'
                        size={'15px'}
                        fontWeight={700}
                        onClick={() => setNext(next + 5)}
                    >
                        Xem thêm review ({list_review_place.length - showReview.length})
                    </Link>
                    :
                    list_review_place.length > 5 &&
                    <Link
                        color='red.500'
                        size={'15px'}
                        fontWeight={700}
                        onClick={() => setNext(2)}
                    >
                        Ẩn bớt
                    </Link>

            }
        </Box>
    )
}

export default LIstReview