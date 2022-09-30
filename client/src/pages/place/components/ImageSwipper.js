import React, { useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper'
import { Box, Image } from '@chakra-ui/react';
import ImageLightbox from './ImageLightbox';
const ImageSwipper = ({ images }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)
    const toggleImageLightBox = (index) => {
        setIsOpen(true)
        setPhotoIndex(index)
    }
    return (
        <Box display={['block', 'none']} height={'600px'}>
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
                        <Image src={item} alt={item} maxW="100%" minHeight={'100%'} onClick={() => toggleImageLightBox(index)} />
                        </SwiperSlide>
                    ))}
            </Swiper>
            <ImageLightbox
                isOpen={isOpen}
                photoIndex={photoIndex}
                setIsOpen={setIsOpen}
                setPhotoIndex={setPhotoIndex}
                images={images}
            />
        </Box>
    )
}

export default ImageSwipper