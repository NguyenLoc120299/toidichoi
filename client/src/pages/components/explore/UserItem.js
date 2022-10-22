import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { FaRss } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { checkLogin } from '../../../redux/actions/authAction'
import { createNotify, removeNotify } from '../../../redux/actions/notifyAction'
import { patchDataAPI } from '../../../untils/fetchData'
const UserItem = ({ item }) => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const socket = useSelector(state => state.socket)
    const isFollow = (user) => {
        if (auth && auth.user) {
            const check = user?.followers.filter(item => item === auth?.user._id)
            if (check.length > 0) return true
        }
        return false
    }
    const follow = async (user) => {
        try {
            if (dispatch(checkLogin(auth))) {
                await patchDataAPI(`user/${user?._id}/follow`, null, auth.token)
                const msg = {
                    id: auth.user._id,
                    text: 'đã bắt đầu theo dõi bạn',
                    recipients: [user._id],
                    url: `/profile/${user?._id}`,
                    conten: "",
                    image: null
                }
                dispatch(createNotify(msg, auth, socket))
            }
        } catch (error) {
            console.log(error);
        }
    }
    const unFollow = async (user) => {
        try {
            if (dispatch(checkLogin(auth))) {
                await patchDataAPI(`user/${user?._id}/unfollow`, null, auth.token)
                const msg = {
                    id: auth.user._id,
                    text: 'bỏ theo dõi  bạn',
                    recipients: [user._id],
                    url: `/profile/${user?._id}`,
                    content: "",
                    image: null
                }
                dispatch(removeNotify(msg, auth, socket))
            }
        } catch (error) {
            console.log(error);
        }
    }
    const onSubmitFollow = async (user) => {
        if (isFollow(user))
            await unFollow(user)
        else
            await follow(user)
    }
    return (

        <Box
            display="flex"
            margin="12px 0"
            cursor="pointer"
            justifyContent={'space-between'}
        >
            <Link to={`/profile/${item._id}`}>
                <Box display='flex'>
                    <Box
                        backgroundColor=" #eee"
                        backgroundPosition=" 50%"
                        backgroundSize=" cover"
                        backgroundRepeat=" no-repeat"
                        cursor=" pointer"
                        width=" 50px"
                        height=" 50px"
                        marginRight=" 10px"
                        borderRadius={"50%"}
                        border=" none"
                        overflow=" hidden"
                    >
                        <Box
                            w="50px"
                            h={"50px"}

                        >

                            <Avatar size='md' name={item.username} src={item.avatar} />
                        </Box>

                    </Box>
                    <Flex
                        flexDirection={'column'}
                    >
                        <Text
                            overflow="hidden"
                            whiteSpace="nowrap"
                            textOverflow="ellipsis"
                            color="rgba(0,0,0,.85)"
                            fontWeight="500"
                        >
                            {item.username}
                        </Text>
                        <Flex
                            alignItems={"center"}
                        >
                            <Text
                                overflow="hidden"
                                whiteSpace="nowrap"
                                textOverflow="ellipsis"
                                color="rgba(0,0,0,.85)"
                                fontWeight="300"
                                maxW={'275px'}
                            >
                                {item.blogs.length} Đánh giá
                            </Text>

                        </Flex>


                    </Flex>
                </Box>
            </Link>
            <Button
                leftIcon={<FaRss />}
                ml={3}
                colorScheme={"red"}
                variant={"outline"}
                _focus={{

                    background: "transparent",
                    boxShadow: 'unset'
                }}
                minW={"160px"}
                onClick={() => onSubmitFollow(item)}

            >
                {
                    isFollow(item) ? "Đang theo dõi" : "Theo dõi"
                }
            </Button>
        </Box>

    )
}

export default UserItem