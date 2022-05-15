import { Button } from '@chakra-ui/react'
import React from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { likeReview, unLikeReview } from '../redux/actions/reviewAction'

const LikeButton = ({ isLike, item }) => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const likeAction = (auth, item) => {
        if (isLike) dispatch(unLikeReview(auth, item))
        else
            dispatch(likeReview(auth, item))
    }
    return (
        <Button
            background={'transparent'}
            _focus={{
                border: "unset",
                background: "transparent",
                boxShadow: 'unset'
            }}
            _active={{
                background: "transparent"
            }}
            _hover={{
                background: "unset"
            }}
            p={0}
            onClick={() => likeAction(auth, item)}
        >
            {
                isLike ? <AiFillHeart style={{ marginRight: '5px', color: 'red' }} />
                    : <AiOutlineHeart style={{ marginRight: '5px' }} />
            }
            <span>{item.likes.length || 0} like</span>
        </Button>
    )
}

export default LikeButton