import { Avatar, Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const ReviewItem = ({review}) => {
  return (
      <Box my={5}>
          <Flex w={'100%'} >
              <Box mr={5} display={['none','block']}>
                  <Avatar size='lg' name={review.user?.username} src={review.user?.avatar} />{' '}
              </Box>
              <Box
                  position={'relative'}
                  bg="gray.100"
                  rounded={'md'}
                  w="calc(100% - 64px - 20px);"
                  _before={['',{
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
                  }]}
              >
                  <Box p={3}>
                      <Box mb={5}>
                          <Avatar size='md' name={review.user?.username} src={review.user?.avatar} display={['block', 'none']} />{' '}
                          <Heading as={'h3'} size={'sm'}>{review.user.username}</Heading>
                      </Box>
                      <Box>
                          <Text  size={'md'}>{review.content}</Text>
                      </Box>
                  </Box>
                
              </Box>
          </Flex>
      </Box>
  )
}

export default ReviewItem