import { Box, Button, Grid, GridItem, Image, SimpleGrid, Skeleton, Text } from '@chakra-ui/react'
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
    <SimpleGrid columns={[1, 3]} spacing={2} my={3} display={['none', 'grid']}>

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
            index == 2 ?
              <Grid
                height={'355px'}
                key={index}
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(2, 1fr)'
                gap={2}
              >
                <GridItem colSpan={2} rowSpan={1} overflow={'hidden'} >
                  <Image
                    rounded={'lg'}
                    src={images[index]}
                    w={'100%'}
                    h='100%'
                    objectFit={'cover'}
                    onClick={() => toggleImageLightBox(index)} />
                </GridItem>
                <GridItem colSpan={1} overflow={'hidden'}>
                  <Image
                    rounded={'lg'}
                    src={images[index + 1]}
                    w={'100%'}
                    h='100%'
                    objectFit={'cover'}
                    onClick={() => toggleImageLightBox(index + 1)} />
                </GridItem>
                <GridItem colSpan={1} overflow={'hidden'} >
                  <Image
                    rounded={'lg'}
                    src={images[index + 2]}
                    w={'100%'}
                    h='100%'
                    objectFit={'cover'}
                    onClick={() => toggleImageLightBox(index + 2)} />
                </GridItem>
              </Grid>
              :
              <Box
                height={'355px'}
                position={"relative"}
                key={index}
                cursor="pointer"
                _before={index === 2 ? {
                  content: '""',
                  position: 'absolute',
                  width: "100%",
                  height: "100%",
                  opacity: "0.4"
                } : ''} onClick={() => toggleImageLightBox(index)}>
                {
                  index === 0 &&
                  <Box
                    position={'absolute'}
                    left="10px"
                    bottom={'10px'}>
                    <Button
                      className='custom_btn'
                      color={"#fff"}
                      opacity={1}
                      onClick={() => toggleImageLightBox(0)}
                      display={"flex"}
                      alignItems={'center'}
                      background={'rgba(0,0,0,.6666666666666666)'}
                      _focus={{
                        background: 'rgba(0,0,0,.6666666666666666)'
                      }}
                      _hover={{ background: 'rgba(0,0,0,.6666666666666666)' }}
                    >
                      <i className="fas fa-image" style={{ marginRight: '10px' }}></i>
                      Xem tất cả ({images.length})
                    </Button>
                  </Box>}

                {index === 2 &&
                  <Box
                    position={'absolute'}
                    left='50%'
                    top={'50%'}
                    transform={"translate(-50%,-50%"}
                    onClick={() => toggleImageLightBox(2)}
                  >
                    {/* <Text
                    fontWeight={'600'}
                    color={'white'}
                    cursor={"pointer"}
                    fontSize={"25px"}>+{images.length - 2} ảnh</Text> */}
                  </Box>}
                <Image
                  rounded={'lg'}
                  src={item}
                  w={'100%'}
                  h='100%'
                  objectFit={'cover'}
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