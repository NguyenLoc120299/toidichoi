import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { FaReply } from 'react-icons/fa'
import ReviewItem from '../pages/place/components/ReviewItem'
import { useState } from 'react'
const ReviewReply = ({ item }) => {
    const [isShowComment, setIsShowComment] = useState(false)
    const renderReply = () => {
        if (item.length > 0) {
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
                    onClick={() => setIsShowComment(true)}
                >
                    <FaReply style={{
                        transform: 'rotate(180deg)',
                        marginRight: "10px"
                    }} />
                    Xem {item.length} trả lời
                </Button>
            )
        }
    }

    return (
        <Box>
            {
                renderReply()
            }
            {
                isShowComment && item.map(item => (
                    <ReviewItem
                        avatar={item?.user?.avatar}
                        comments={[]}
                        likes={item.likes}
                        content={item.content}
                        username={item?.user?.username}
                        createdAt={item.createdAt}
                        key={item._id}
                        isComment={true}
                    />
                ))
            }
        </Box>
    )
}

export default ReviewReply