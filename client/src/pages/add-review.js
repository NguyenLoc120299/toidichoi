import React, { useEffect, useState } from 'react'
import { Box, Button, Container, Flex, FormControl, Heading, Input, SimpleGrid, Text, Textarea, useDisclosure, Wrap, WrapItem } from '@chakra-ui/react'
import RateReview from './place/components/RateReview'
import UploadImage from './components/upload-image/UploadImage'
import ModalPlaceReview from '../components/ModalPlaceReview'
import PlaceSelected from '../components/PlaceSelected'
import { PLACE_ACTIONS } from '../redux/actions/imageAction'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import {createReview} from '../redux/actions/reviewAction'
import FormData from './place/components/FormDataReview'
const AddReview = () => {
    const [rate, setRate] = useState(5)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const dispatch= useDispatch()
    const { reviewImage } = useSelector(state => state.image)
    const {auth}= useSelector(state=>state)
    const [placeSelected, setPlaceSelected] = useState(null)
    const handleSelectPlace = (place) => {
        setPlaceSelected(place)
    }
    const [formData, setFormData] = useState({
        title: '',
        content: ''
    })
   
    const onSubmit=()=>{
        dispatch(createReview(placeSelected,formData,reviewImage,rate,auth))
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
                        <RateReview rate={rate} setRate={setRate} />                    
                            <FormData
                             formData={formData}
                             reviewImage={reviewImage}
                             setFormData={setFormData}
                             />
                        <Button colorScheme={'red'} rounded="lg" onClick={()=>onSubmit()}>Gửi đánh giá của bạn</Button>
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
                            {placeSelected ? <PlaceSelected item={placeSelected} />
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