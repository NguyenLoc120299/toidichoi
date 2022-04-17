import { Box, Center, Container } from '@chakra-ui/react'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import style from '../categories/categories.module.css'
import { Autoplay, Pagination, Navigation } from "swiper";
import { useSelector } from 'react-redux';

const Area = () => {
    const { data } = useSelector(state => state.area)
    return (
        <Container maxW={'1200px'}>
            <Box py={5}>
                <div className='title'>Khu vực gần đây ?</div>
            </Box>
            <Box py={5}>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={4}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    loop={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className={style.slider}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            centeredSlides: true
                        },
                        992: {
                            width: 1200,
                            slidesPerView: 4,
                        }
                    }}
                >
                    {
                        data.map(item => (
                            <SwiperSlide key={item._id}>
                                <div className={style.card_slide}>
                                    <img src={item.image} alt="Đọc Sách" />
                                    <div className={style.category}>
                                        <Center>
                                            <div>
                                                <span>{item.name}</span>
                                                <p>10 địa điểm</p>
                                            </div>
                                        </Center>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </Box>
        </Container>
    )
}

export default Area