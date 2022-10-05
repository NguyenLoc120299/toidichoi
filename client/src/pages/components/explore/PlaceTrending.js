import { Box, Flex, Image, Text } from '@chakra-ui/react'
import { async } from '@firebase/util'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { ALERT_ACTION } from '../../../redux/actions/alertAction'
import { getDataAPI } from '../../../untils/fetchData'
import { BoxCustom } from './ExplorerSidebar'

const PlaceTrending = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState([])
    const getPlaceTrending = async () => {
        try {
            const res = await getDataAPI('place-outstanding')
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
        getPlaceTrending()

    }, [dispatch])

    return (

        <BoxCustom
        >
            <Text as={'h3'}
                fontSize="20px"
                textAlign="center"
                paddingBottom="14px"
                borderBottom="1px solid #eee"
                fontWeight={'700'}
            >Địa điểm nổi bật</Text>
            {
                data && data.map(item => {

                    return (
                        <Link to={`/place/${item.totalData._id}`}>
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
                                    borderRadius=" 6px"
                                    border=" none"
                                >
                                    <Box
                                        w="50px"
                                        h={"50px"}>

                                        <Image src={item.totalData.images[0]} alt={item.totalData.name} w="100%" h={"100%"} />
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
                                        {item.totalData.name}
                                    </Text>
                                    <Text
                                        overflow="hidden"
                                        whiteSpace="nowrap"
                                        textOverflow="ellipsis"
                                        color="rgba(0,0,0,.85)"
                                        fontWeight="300"
                                        maxW={'275px'}
                                    >
                                        {item.totalData.address}
                                    </Text>

                                </Flex>
                            </Box>
                        </Link>
                    )
                })


            }
            <Box display={'flex'} color={"#0770cd"}
            >
                <Link to="/search">Xem tất cả</Link>
            </Box>
        </BoxCustom>
    )
}

export default PlaceTrending