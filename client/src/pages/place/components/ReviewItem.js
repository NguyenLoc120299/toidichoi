import { Avatar, Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import ReviewReply from '../../../components/ReviewReply'
import { formatTime } from '../../components/helper/moment'
import ReviewAction from './ReviewAction'

const ReviewItem = ({ avatar, username, createdAt, content, likes, comments, isComment = false }) => {
    return (
        <Box my={5}>
            <Flex w={'100%'} >
                <Box mr={5} display={['none', 'block']}>
                    <Avatar size={isComment ? 'md' : 'lg'} name={username} src={avatar} />
                </Box>
                <Flex
                    direction={'column'}
                >
                    <Box p={3}
                        position={'relative'}
                        bg="gray.100"
                        rounded={'xl'}
                        _before={['', {
                            position: "absolute",
                            top: "25px",
                            right: "auto",
                            bottom: "auto",
                            left: "-12px",
                            content: "''",
                            width: 0,
                            height: 0,
                            borderLeft: "8px solid transparent",
                            borderRight: "8px solid transparent",
                            borderBottom: " 8px solid #f5f5f7",
                            transform: "translatey(-50%) rotate(-90deg)"
                        }]}>
                        <Box mb={5} >
                            <Avatar size='md' name={username} src={avatar} display={['block', 'none']} />{' '}
                            <Flex justifyContent={'space-between'}>
                                <Heading as={'h3'} size={'sm'} mb={1}>{username}</Heading>
                            </Flex>
                            {
                                isComment ?
                                    <Text color={'gray.500'} fontSize={"13px"}> {formatTime(createdAt)}</Text>
                                    :
                                    <Text color={'gray.500'} fontSize={"13px"}> Đã đánh giá {formatTime(createdAt)}</Text>
                            }
                        </Box>
                        <Box>
                            <Text size={'md'}>{content}</Text>
                        </Box>
                    </Box>
                    <ReviewAction
                        likes={likes}
                        comments={comments}
                    />
                    <ReviewReply item={comments} />
                </Flex>
            </Flex>

        </Box>
    )
}

export default ReviewItem