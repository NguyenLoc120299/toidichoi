import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { FaCalendarAlt, FaComment, FaEdit, FaHeart, FaRss } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { formatDay } from '../helper/moment'
import { BoxProfile } from './styled'

const ProfileStatus = ({ reviews, user }) => {
    const status = {
        totalReview: reviews?.dataReview.length || 0,
        countLikes: reviews?.countLikes || 0,
        countComments: reviews?.countComments || 0,
        dateJoin: user?.createdAt || 0
    }
    return (
        <BoxProfile>
            <Text
                fontSize="18px"
                fontWeight=" 600"
                color="#e03"
                marginBottom=" 8px"
                className='custom_text'
            >[ Bảng chiến tích ]</Text>
            <Flex direction={'column'}>
                <Flex justifyContent={'space-between'} mb={3}>
                    <Flex alignItems={'center'}>
                        <FaEdit style={{ color: "#9d9d9d", fontSize: '20px' }} />
                        <Text
                            fontSize="20px"
                            textAlign="left"
                            paddingRight="4px"
                            color="#9d9d9d"
                            marginLeft={'10px'}
                        >
                            Đánh giá
                        </Text>
                    </Flex>
                    <Box
                        padding="0 10px"
                        borderRadius="6px"
                        background="#efefef"
                        display='flex'
                        alignItems={'center'}
                    >
                        {status ? status.totalReview : 0}
                    </Box>
                </Flex>
                <Flex justifyContent={'space-between'} mb={3}>
                    <Flex alignItems={'center'}>
                        <FaComment style={{ color: "#9d9d9d", fontSize: '20px' }} />
                        <Text
                            fontSize="20px"
                            textAlign="left"
                            paddingRight="4px"
                            color="#9d9d9d"
                            marginLeft={'10px'}
                        >
                            Thảo luận
                        </Text>
                    </Flex>
                    <Box
                        padding="0 10px"
                        borderRadius="6px"
                        background="#efefef"
                        display='flex'
                        alignItems={'center'}
                    >
                        {status ? status.countComments : 0}

                    </Box>
                </Flex>
                <Flex justifyContent={'space-between'} mb={3}>
                    <Flex alignItems={'center'}>
                        <FaHeart style={{ color: "#9d9d9d", fontSize: '20px' }} />
                        <Text
                            fontSize="20px"
                            textAlign="left"
                            paddingRight="4px"
                            color="#9d9d9d"
                            marginLeft={'10px'}
                        >
                            Được thích
                        </Text>
                    </Flex>
                    <Box
                        padding="0 10px"
                        borderRadius="6px"
                        background="#efefef"
                        display='flex'
                        alignItems={'center'}
                    >
                        {status ? status.countLikes : 0}
                    </Box>
                </Flex>
                <Flex justifyContent={'space-between'} mb={3}>
                    <Flex alignItems={'center'}>
                        <FaRss style={{ color: "#9d9d9d", fontSize: '20px' }} />
                        <Text
                            fontSize="20px"
                            textAlign="left"
                            paddingRight="4px"
                            color="#9d9d9d"
                            marginLeft={'10px'}
                        >
                            Người theo dõi
                        </Text>
                    </Flex>
                    <Box
                        padding="0 10px"
                        borderRadius="6px"
                        background="#efefef"
                        display='flex'
                        alignItems={'center'}
                    >
                        0
                    </Box>
                </Flex>
                <Flex justifyContent={'space-between'} mb={3}>
                    <Flex alignItems={'center'}>
                        <FaCalendarAlt style={{ color: "#9d9d9d", fontSize: '20px' }} />
                        <Text
                            fontSize="20px"
                            textAlign="left"
                            paddingRight="4px"
                            color="#9d9d9d"
                            marginLeft={'10px'}
                        >
                            Ngày tham gia
                        </Text>
                    </Flex>
                    <Box
                        padding="0 10px"
                        borderRadius="6px"
                        background="#efefef"
                        display='flex'
                        alignItems={'center'}
                    >
                        {status ? formatDay(status.dateJoin) : 0}
                    </Box>
                </Flex>
            </Flex>
        </BoxProfile>
    )
}

export default ProfileStatus