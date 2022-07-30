import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllReviews } from '../../../redux/actions/reviewAction'
import FormNewComment from '../profile/FormNewComment'
import ListReviewReply from '../profile/ListReviewReply'
import ReviewAction from '../profile/ReviewAction'
import ReviewBody from '../profile/ReviewBody'
import ReviewHeader from '../profile/ReviewHeader'

const ExploreFee = ({ item }) => {

    const auth = useSelector(state => state.auth)
    const [setLsComment, setShowLsComment] = useState(false)
    return (
        <Box
            padding="12px 16px"
            marginBottom="20px"
            backgroundColor="#fff"
            borderRadius="10px"
            className='box-shadow'
        >
            <ReviewHeader item={item} />
            <ReviewBody item={item} />
            <ReviewAction item={item} />
            {
                auth.user && <FormNewComment item={item} />
            }
            {
                item.comments.length > 0 && !setLsComment && <Box
                    fontWeight="500"
                    color="#000"
                    my={3}
                    textAlign="center"
                    cursor={"pointer"}
                    onClick={() => setShowLsComment(!setLsComment)}
                >Xem tất cả {item.comments.length} bình luận</Box>
            }
            {
                setLsComment && <ListReviewReply item={item} />
            }
            {
                setLsComment && <Box
                    fontWeight="500"
                    color="#000"
                    my={3}
                    textAlign="center"
                    cursor={"pointer"}
                    onClick={() => setShowLsComment(!setLsComment)}
                >Ẩn tất cả bình luận</Box>
            }

        </Box>

    )
}

export default ExploreFee