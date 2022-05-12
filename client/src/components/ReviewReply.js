import React from 'react'
import { Box, Button } from '@chakra-ui/react'
import { FaReply } from 'react-icons/fa'
const ReviewReply = (item) => {
    console.log(1111111111111111, item);
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
                >
                    <FaReply style={{
                        transform: 'rotate(180deg)',
                        marginRight: "10px"
                    }} />
                    Xem 1 trả lời
                </Button>
            )
        }
    }
    return (
        <Box>
            {
                renderReply()
            }
        </Box>
    )
}

export default ReviewReply