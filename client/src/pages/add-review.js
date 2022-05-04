import React, { useEffect, useState } from 'react'
import { Box, Button, Container, Flex, FormControl, Heading, Input, SimpleGrid, Text, Textarea, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react'
import RateReview from './place/components/RateReview'
import UploadImage from './components/upload-image/UploadImage'
import ModalPlaceReview from '../components/ModalPlaceReview'
import PlaceSelected from '../components/PlaceSelected'
const AddReview = () => {
    const [rate, setRate] = useState(5)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placeSelected, setPlaceSelected] = useState(null)
    const handleSelectPlace = (place) => {
        setPlaceSelected(place)
    }
    const handleOnchange = (v) => {
        setRate(v);
    }
    return (
        <Container maxW={'1280px'} py={5}>
            <ModalPlaceReview
                isOpen={isOpen}
                onClose={onClose}
                handleSelectPlace={handleSelectPlace}
            />
            <Box boxShadow={'md'} rounded={'md'} p={5}>
                <Heading as={'h4'} textAlign={"center"} fontSize={'2xl'} my={10}>Viết review</Heading>
                <SimpleGrid columns={[1, 2]} spacing={100} mb={5}>
                    <Box>
                        <RateReview rate={rate} handleOnchange={handleOnchange} />
                        <Heading as={'h4'} fontSize="lg" textColor={'gray.500'} mb={5}>Đánh giá của bạn</Heading>
                        <FormControl mb={3}>
                            <Input placeholder='Nhập tiêu đề đánh giá' />
                        </FormControl>
                        <FormControl >
                            <Textarea placeholder='Nhập nội dung đánh giá' />
                        </FormControl>
                        <UploadImage
                            type={'11111'}
                            name={'display_image'}
                        // images={displayImage}
                        />
                        <Button colorScheme={'red'} rounded="lg">Gửi đánh giá của bạn</Button>
                    </Box>
                    <Box>
                        <Heading as={'h4'} fontSize="lg" textColor={'gray.500'} mb={3}>Địa điểm</Heading>
                        <Box
                            w={'100%'}
                            minHeight="80px"
                            border={'1px'}
                            borderStyle='dashed'
                            borderColor={'gray.300'}
                            position="relative"
                            cursor={'pointer'}
                            onClick={onOpen}
                        >
                            {placeSelected ? <PlaceSelected item={placeSelected}/>
                                    :
                                    <span style={{
                                        position: 'absolute',
                                        left: "50%",
                                        top: '50%',
                                        transform: 'translate(-50%,-50%)',
                                        color: "#aaa",
                                        cursor: 'pointer'
                                }}>Nhấn vào đây để chọn địa điểm</span>}
                        </Box>
                    </Box>
                </SimpleGrid>

            </Box>
        </Container>
    )
}

export default AddReview