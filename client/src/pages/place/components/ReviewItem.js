import { Avatar, Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { formatTime } from '../../components/helper/moment'
import ReviewAction from './ReviewAction'

const ReviewItem = ({ review }) => {
    console.log(review, 1111111111111111111111);
    return (
        <Box my={5}>
            <Flex w={'100%'} >
                <Box mr={5} display={['none', 'block']}>
                    <Avatar size='lg' name={review.user?.username} src={review.user?.avatar} />{' '}
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
                            <Avatar size='md' name={review.user?.username} src={review.user?.avatar} display={['block', 'none']} />{' '}
                            <Heading as={'h3'} size={'sm'} mb={1}>{review.user.username}</Heading>
                            <Text color={'gray.500'} fontSize={"13px"}>Đã đánh giá {formatTime(review.createdAt)}</Text>
                        </Box>
                        <Box>
                            <Text size={'md'}>{review.content}</Text>
                        </Box>
                    </Box>
                    <ReviewAction item={review} />
                </Flex>
            </Flex>

        </Box>
    )
}

export default ReviewItem