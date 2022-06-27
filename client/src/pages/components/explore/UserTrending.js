import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { FaRss } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { ALERT_ACTION } from '../../../redux/actions/alertAction'
import { getDataAPI } from '../../../untils/fetchData'
import { BoxCustom } from './ExplorerSidebar'

const UserTrending = () => {
    const dispatch = useDispatch()

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
            >Người dùng tích cực</Text>
            {
                data && data.map(item => {

                    return (
                        <Link to={`#`}>
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

                                        >
                                            Theo dõi
                                        </Button>
                                    </Flex>


                                </Flex>
                            </Box>
                        </Link>
                    )
                })


            }

        </BoxCustom>
    )
}

export default UserTrending