import { Avatar, Box, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { ALERT_ACTION } from '../../../redux/actions/alertAction'
import { getDataAPI } from '../../../untils/fetchData'
import { BoxCustom } from './ExplorerSidebar'
import UserItem from './UserItem'
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
                fontWeight={700}
            >Người dùng tích cực</Text>
            {
                data && data.map(item => {

                    return (
                        <UserItem item={item.users} />
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