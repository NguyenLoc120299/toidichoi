import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { BiComment, BiShare } from 'react-icons/bi'

const ReviewAction = ({ item }) => {
    return (
        <Box
            display={'flex'}
            justifyContent="space-around"
            padding="4px 0"
            marginTop="10px"
            borderTop="1px solid #eee"
            borderBottom="1px solid #eee"
        >
            <Button
                cursor="pointer"
                width="100%"
                fontSize="16px"
                padding="4px 0"
                outline="none"
                backgroundColor="transparent"
                _active={{
                    border: "unset",
                    background: "transparent",
                    boxShadow: 'unset'
                }}
                _focus={{
                    border: "unset",
                    background: "transparent",
                    boxShadow: 'unset'
                }}
            >
                <AiOutlineHeart style={{
                    marginRight: '5px'
                }} />
                <span> {item.likes.length} Thích</span>
            </Button>
            <Button
                cursor="pointer"
                width="100%"
                fontSize="16px"
                padding="4px 0"
                outline="none"
                backgroundColor="transparent"
            >
                <BiComment style={{
                    marginRight: '5px'
                }} />
                <span>{item.comments.length} Bình luận</span>
            </Button>
            <Button
                cursor="pointer"
                width="100%"
                fontSize="16px"
                padding="4px 0"
                outline="none"
                backgroundColor="transparent"
            >
                <BiShare />
                <span>Chia sẻ</span>
            </Button>
        </Box>
    )
}

export default ReviewAction