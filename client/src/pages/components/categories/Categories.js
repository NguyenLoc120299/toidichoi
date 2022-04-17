import { Box, Center, Container } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import style from './categories.module.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSelector } from 'react-redux';
const Categories = () => {
    const { categories } = useSelector(state => state)
    return (
        <Container maxW={'1200px'} pt={10}>
            <Box py={5}>
                <div className='title'>Mục đích bạn cần ?</div>
            </Box>
            <Box py={5}>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
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
                            slidesPerView: 3,
                            centeredSlides: true
                        }
                    }}
                >
                    {
                        categories?.data.map(item => (
                            <SwiperSlide key={item._id}>
                                <div className={style.card_slide}>
                                    <img src={item.image} alt={item.image} />
                                    <div className={style.category}>
                                        <Center>
                                            <span>{item.name}</span>
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

export default Categories