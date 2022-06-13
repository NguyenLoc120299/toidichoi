import { Box, Center, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom';
import { FaCaretRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { formatTime } from '../../components/helper/moment'
import Rate from 'rc-rate';
const ReviewHeader = ({ item }) => {
    const auth = useSelector(state => state.auth)
    return (
        <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            position='relative'
        >
            <Box
                backgroundColor="#eee"
                backgroundPosition="50%"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                flex="0 0 auto"
                cursor="pointer"
                width="46px"
                height="46px"
                borderRadius="50%"
                border="none"
                overflow="hidden"
            >
                <Box
                    height="100%"
                    width="100%"
                    position="relative"
                >
                    <Image src={item.user.avatar}
                        backgroundPosition="50%"
                        backgroundSize="cover"
                        height="100%"
                        width="100%"
                        objectFit="cover"
                    />

                </Box>
            </Box>

            <Box

                margin=" 0 30px 0 8px"
            >
                <Box display={'flex'} alignItems="center">
                    <RouterLink to={item.user._id === auth.user._id ? '/profile' : `/prodile/${item.user._id}`}>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            fontSize="18px"
                            fontWeight="600"
                            letterSpacing=".4px"
                            marginRight="5px"
                            color="#000"
                        >{item.user.username}</Box>
                    </RouterLink>
                    <FaCaretRight style={{
                        color: "#ccc"
                    }} />
                    <RouterLink href={`/place/${item.placeId._id}`}>
                        <Box
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                            fontSize="18px"
                            fontWeight="600"
                            letterSpacing=".4px"
                            marginRight="5px"
                            color="#000"
                        >{item.placeId.name}
                        </Box>
                    </RouterLink>
                </Box>
                <Center justifyContent={'flex-start'}>
                    <Rate
                        style={{ fontSize: "15px" }}
                        value={item.placeId.rate.rateNumber}
                        allowHalf
                        disabled
                        character={<i className="anticon anticon-star" />} />
                    <Box m={"0 6px"}></Box>
                    <Text as="p"
                        color="#898c95"
                    >
                        {formatTime(item.createdAt)}
                    </Text>
                </Center>
            </Box>
        </Box >
    )
}

export default ReviewHeader