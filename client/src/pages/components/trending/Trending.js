import { Box, Container, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CardItem from '../../../components/CardItem'
import { ALERT_ACTION } from '../../../redux/actions/alertAction'
import { getDataAPI } from '../../../untils/fetchData'
const Trending = () => {
    const [places, setPlaces] = useState([])
    const dispatch = useDispatch()
    const getPlaceTrending = async () => {
        try {
            const res = await getDataAPI('place-outstanding')
            if (res && res.data) setPlaces(res.data)
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
        <Container maxW={"1200px"}>
            <Box py={5}>
                <div className='title'>Địa điểm nổi bật</div>
            </Box>
            <SimpleGrid columns={[1, 4]} spacing={10}>
                {
                    places.map(item => (
                        <Box key={item.totalData._id}>
                            <CardItem item={item.totalData} />
                        </Box>
                    ))
                }
            </SimpleGrid>
        </Container>
    )
}

export default Trending