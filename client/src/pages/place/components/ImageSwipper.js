import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper'
import { Box, Image } from '@chakra-ui/react';
const ImageSwipper = ({ images }) => {
    return (
        <Box display={['block', 'none']}>
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
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
            >
                {images && images.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Image src={item} alt={item} maxW="100%" minHeight={'100%'} />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </Box>
    )
}

export default ImageSwipper