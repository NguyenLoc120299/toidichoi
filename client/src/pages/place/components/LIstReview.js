import { Box, Button, Flex, Link, Skeleton, SkeletonCircle } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import ReviewItem from './ReviewItem'

const LIstReview = () => {
    const list_review_place = useSelector(state => state.review.list_review_place)
    const [next, setNext] = useState(10)
    const [showReview, setShowReview] = useState([])
    useEffect(() => {
        setShowReview(list_review_place.slice(list_review_place.length - next))
    }, [list_review_place, next])

    if (list_review_place.length > 0) {
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
                            reviewId={item._id}
                            reviewUserId={item.user._id}
                            images={item.images}
                            review={item}
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
                        list_review_place.length > 10 &&
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
    } else {
        return (
            <Box>
                {
                    [1, 2, 3, 4, 5].map((item, index) => (
                        <Flex mt={5} alignItems='center' key={index}>
                            <SkeletonCircle size='10' mr={5} />
                            <Skeleton height='30px' w={'50%'} />
                        </Flex>
                    ))
                }
            </Box>
        )
    }
}

export default LIstReview