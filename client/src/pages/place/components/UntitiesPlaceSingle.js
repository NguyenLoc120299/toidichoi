import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper'
const UntitiesPlaceSingle = ({ utities }) => {
    return (
        <Box boxShadow='md' p='6' rounded='md' bg='white' my={3} className="utities_single_place">
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
                modules={[Autoplay]}
                loop={true}>
                {utities && utities.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Flex direction={'column'}>
                                <Text>{item.icon}</Text>
                                <Text>{item.name}</Text>
                            </Flex>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </Box>
    )
}

export default UntitiesPlaceSingle