import React from 'react'
import { Avatar, Box, Button, Flex } from '@chakra-ui/react'
import { FaReply } from 'react-icons/fa'
import BoxComment from '../pages/place/components/BoxComment'
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
                    onClick={() => setIsShowComment(!isShowComment)}
                >
                    <FaReply style={{
                        transform: 'rotate(180deg)',
                        marginRight: "10px"
                    }} />
                    {isShowComment ? "Thu gọn" : `Xem ${item.length} trả lời`}
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
                isShowComment &&
                item.map(i => (
                    <Box display={['block', 'flex']} key={i._id} mb={3}>
                        <Box mr={5} display={['none', 'block']}>
                            <Avatar size={'md'} name={i.user.username} src={i.user.avatar} />
                        </Box>
                        <Flex
                            direction={'column'}
                        >
                            <BoxComment
                                username={i.user.username}
                                content={i.content}
                                isComment={true}
                                createdAt={i.createdAt}
                                avatar={i.user.avatar}
                            />
                        </Flex>
                    </Box>

                ))
            }

        </Box>
    )
}

export default ReviewReply