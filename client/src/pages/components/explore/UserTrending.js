import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaRss } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { ALERT_ACTION } from '../../../redux/actions/alertAction'
import { checkLogin } from '../../../redux/actions/authAction'
import { createNotify, removeNotify } from '../../../redux/actions/notifyAction'
import { getDataAPI, patchDataAPI } from '../../../untils/fetchData'
import { BoxCustom } from './ExplorerSidebar'
const UserTrending = () => {
    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const socket = useSelector(state => state.socket)
    const [data, setData] = useState([])
    const getUserTrending = async () => {
        try {
            const res = await getDataAPI('user-trending')
            if (res && res.data) setData(res.data)
        } catch (error) {
            dispatch({
                type: ALERT_ACTION.ALERT,
                payload: {
                    err: error.response.data.msg
                }
            })
        }
    }
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
    useEffect(() => {
        getUserTrending()
    }, [dispatch])
    return (
        <BoxCustom
        >
            <Text as={'h3'}
                fontSize="20px"
                textAlign="center"
                paddingBottom="14px"
                borderBottom="1px solid #eee"
                fontWeight={700}
            >Người dùng tích cực</Text>
            {
                data && data.map(item => {

                    return (
                        <Link to={`/profile/${item.users._id}`}>
                            <Box
                                display="flex"
                                margin="12px 0"
                                cursor="pointer"
                            >
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

                                        <Avatar size='md' name={item.users.username} src={item.users.avatar} />
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
                                        {item.users.username}
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
                                            {item.users.blogs.length} Đánh giá
                                        </Text>
                                        <Button
                                            leftIcon={<FaRss />}
                                            ml={3}
                                            colorScheme={"red"}
                                            variant={"outline"}
                                            _focus={{

                                                background: "transparent",
                                                boxShadow: 'unset'
                                            }}
                                            onClick={() => onSubmitFollow(item.users)}

                                        >
                                            {
                                                isFollow(item.users) ? "Đang theo dõi" : "Theo dõi"
                                            }
                                        </Button>
                                    </Flex>


                                </Flex>
                            </Box>
                        </Link>
                    )
                })


            }
            <Box display={'flex'} color={"#0770cd"}
            >
                <Link to="#">Xem tất cả</Link>
            </Box>
        </BoxCustom>
    )
}

export default UserTrending