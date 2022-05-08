import { Box, Button, Image, SimpleGrid, Skeleton, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import ImageLightbox from './ImageLightbox';
const ImagesPlace = ({ images, loading }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const toggleImageLightBox = (index) => {
    setIsOpen(true)
    setPhotoIndex(index)
  }
  return (
    <SimpleGrid columns={[1, 3]} spacing={10} my={3} display={['none', 'grid']}>

      {
        !images ?
          <>
            <Box
              height={'355px'}
            >
              <Skeleton h={'100%'} rounded={"md"} />
            </Box>
            <Box
              height={'355px'}
            >
              <Skeleton h={'100%'} rounded={"md"} />
            </Box>
            <Box
              height={'355px'}
            >
              <Skeleton h={'100%'} rounded={"md"} />
            </Box>
          </>
          :
          images && images.slice(0, 3).map((item, index) => (
            <Box
              height={'355px'}
              position={"relative"}
              key={index}
              _before={index === 2 ? {
                content: '""',
                position: 'absolute',
                width: "100%",
                height: "100%",
                bg: "gray.200",
                opacity: "0.4"
              } : ''}>
              {
                index === 0 &&
                <Box
                  position={'absolute'}
                  left="10px"
                  bottom={'10px'}>
                  <Button
                    colorScheme='gray'
                    opacity={0.7}
                    onClick={() => toggleImageLightBox(0)} >
                    Xem tất cả ({images.length})
                  </Button>
                </Box>}
              {index === 2 &&
                <Box
                  position={'absolute'}
                  left='50%'
                  top={'50%'}
                  transform={"translate(-50%,-50%"}
                >
                  <Text
                    fontWeight={'600'}
                    color={'white'}
                    cursor={"pointer"}
                    fontSize={"25px"}>+1 ảnh</Text>
                </Box>}
              <Image
                rounded={'lg'}
                src={item}
                w={'100%'}
                maxH='100%'
                objectFit={''}
                onClick={() => toggleImageLightBox(index)} />
            </Box>
          ))}
      <ImageLightbox
        isOpen={isOpen}
        photoIndex={photoIndex}
        setIsOpen={setIsOpen}
        setPhotoIndex={setPhotoIndex}
        images={images}
      />
    </SimpleGrid>
  )
}

export default ImagesPlace