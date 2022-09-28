import { Box, Flex, Avatar } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { formatTime } from '../helper/moment'
import { BoxAvatar } from './styled'

const ListReviewReply = ({ item }) => {
    return (
        <Box>
            {
                item.comments.length > 0 && item.comments.map((cmt) => (
                    <Flex my={5} key={cmt._id}>
                        <Box
                            textAlign={'center'}
                            mr="6px"
                        >
                            <Avatar src={cmt.user.avatar} name={cmt.user.name} size="sm" />
                        </Box>
                        <Box
                            padding="8px 15px"
                            borderRadius="18px"
                            backgroundColor="#f5f5f7"
                            w="100%"
                        >
                            <Box
                                textAlign={'left'}
                            >
                                <Flex mb={3}>
                                    <Link to={"#"}
                                        style={{
                                            fontWeight: "600",
                                            color: "#000",
                                            letterSpacing: ".4px"
                                        }}
                                    >{cmt.user.username}</Link>
                                    <Box
                                        fontSize="12px"
                                        color="#898c95"
                                        display={'flex'}
                                        alignItems="center"
                                        marginLeft={'6px'}
                                    >
                                        {formatTime(cmt.createdAt)}
                                    </Box>
                                </Flex>
                                <Box>
                                    {cmt.content}
                                </Box>
                            </Box>
                        </Box>
                    </Flex>
                ))

            }

        </Box >
    )
}

export default ListReviewReply