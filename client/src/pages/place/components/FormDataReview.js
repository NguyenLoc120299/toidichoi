import { FormControl, Heading, Input, Textarea } from '@chakra-ui/react'
import React from 'react'
import { PLACE_ACTIONS } from '../../../redux/actions/imageAction'
import UploadImage from '../../components/upload-image/UploadImage'

const FormData = ({formData,reviewImage,setFormData,loading}) => {
  const handleOnchangeFormData = e => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }
  return (
    <>
      <Heading as={'h4'} fontSize="lg" textColor={'gray.500'} mb={5}>Đánh giá của bạn</Heading>
      <FormControl mb={3}>
        <Input
          placeholder='Nhập tiêu đề đánh giá'
          name="title"
          value={formData.title}
          onChange={handleOnchangeFormData} />
      </FormControl>
      <FormControl >
        <Textarea
          placeholder='Nhập nội dung đánh giá'
          name="content"
          value={formData.content}
          onChange={handleOnchangeFormData} />
      </FormControl>
      <UploadImage
        type={PLACE_ACTIONS.REVIEW_IMAGE}
        name={'review_image'}
        images={reviewImage}
      />
    </>
  )
}

export default FormData