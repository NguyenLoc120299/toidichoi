import { Box, Heading, Image, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Swiper, SwiperSlide } from "swiper/react";
import CardItem from '../../../components/CardItem'
import { ALERT_ACTION } from '../../../redux/actions/alertAction'
import { postDataAPI } from '../../../untils/fetchData'
import { Autoplay, Pagination, Navigation } from 'swiper'
const RelatePlace = ({ item }) => {
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    const getRelatePlace = async () => {
        try {
            const places = await postDataAPI('search', {
                typeData: [],
                utitiesData: [],
                priceData: [],
                areaData: [item.area],
                isTimeOpen: false
            })
            const placesFilter = places.data.data.filter(el => el._id !== item._id)
            setData(placesFilter)
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
        getRelatePlace()
    }, [item])
    console.log(data);
    if (data.length === 0) {
        return (
            <Box
                fontWeight={'bold'}
                fontSize={'lg'}
                textAlign={'center'}
                color={'gray.500'}
                mt={'3'}
            >
                <Heading as="h3" size="lg" fontWeight="medium">
                    Không có địa điểm nào lân cận
                </Heading>
                <Image maxW={"100%"} maxH={"100%"} src="https://doodleipsum.com/1200x394/flat?i=ab35c7076496f3a1b9895105769c3fc4" />
            </Box>
        )
    } else {
        return (
            <Box boxShadow="0 2px 8px rgb(0,0,0,15%)" rounded={'md'} p={['3', '6']} mb={[0, 10]}>
                <Heading as={'h3'} size={['lg']} mb={5}>Địa điểm lân cận</Heading>
                <SimpleGrid columns={[1, 4]} spacing={10} display={['none', 'grid']}>
                    {
                        data.slice(0, 4).map((item, index) => (
                            <CardItem key={index} item={item} />
                        ))
                    }
                </SimpleGrid>
                <Box display={['block', 'none']}>
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        // autoplay={{
                        //     delay: 2500,
                        //     disableOnInteraction: false,
                        // }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        loop={true}
                        modules={[Autoplay, Pagination, Navigation]}
                    >
                        {data.map((item, index) => (
                            <SwiperSlide key={index}>
                                <CardItem key={index} item={item} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </Box>
        )
    }

}

export default RelatePlace