import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
    Heading,
    Button,
} from '@chakra-ui/react'
import RateReview from './RateReview'
import { useState } from 'react'
import FormData from './FormDataReview'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { createReview } from '../../../redux/actions/reviewAction'
const ModalAddReview = ({ isOpen, onClose, place }) => {
    const [rate, setRate] = useState(5)
    const [formData, setFormData] = useState({
        title: '',
        content: ''
    })
    const { reviewImage } = useSelector(state => state.image)
    const { auth,alert } = useSelector(state => state)
    const dispatch = useDispatch()
    const onSubmit = () => {
        dispatch(createReview(place,formData, reviewImage, rate, auth))
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered size={'xl'}>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton _focus={{ border: "unset" }} />
                <ModalBody>
                    <Heading
                        as={'h3'}
                        size={"md"}
                        textAlign={'center'}
                        my={5}>
                        {place.name}
                    </Heading>
                    <RateReview
                        rate={rate}
                        setRate={setRate}
                    />
                    <FormData
                        formData={formData}
                        setFormData={setFormData}
                        reviewImage={reviewImage}
                    />
                    <Button
                        colorScheme={'red'}
                        rounded="lg" onClick={() => onSubmit()}
                        isLoading={alert.loading}
                        mb={10}
                    >Đánh giá</Button>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ModalAddReview