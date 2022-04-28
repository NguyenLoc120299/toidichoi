import { Box, Button, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'

const ImagesPlace = ({images}) => {
  return (
    <SimpleGrid columns={[1, 3]} spacing={10} my={3} display={['none', 'grid']}>
      {
        images && images.slice(0, 3).map((item, index) => (
          <Box height={'355px'} position={"relative"} key={index}>

            <Box position={'absolute'} left="10px" bottom={'10px'}>
              {
                index === 0 && <Button colorScheme='gray' opacity={0.7} >
                  Xem tất cả ({images.length})
                </Button>
              }
            </Box>
            <Image rounded={'lg'} src={item} w={'100%'} maxH='100%' objectFit={''} />
          </Box>
        ))
      }
      {/* <Box height={'355px'} position={"relative"}>
           
            <Box position={'absolute'} left="10px" bottom={'10px'}>
              <Button colorScheme='gray' opacity={0.7} >
                Xem tất cả ({detail_place.images.length})
              </Button>
            </Box>
            <Image rounded={'lg'} src='https://toidicafe.vn/static/images/place/manoir-cafe/57730e48-1fe6-4d2d-8305-4c24202689e5.jpg' w={'100%'} maxH='100%' objectFit={'cover'} />
          </Box>
          <Box height={'355px'}>
            <Image rounded={'lg'} src='https://toidicafe.vn/static/images/place/floralia-tearoom-and-wine-bistro/2e2a633e-1296-4406-8712-b8c92c2630e7.jpg' w={'100%'} maxH='100%' objectFit={'cover'} />
          </Box>
          <Box height={'355px'}
            position='relative'
            _before={{
              content: '""',
              position: 'absolute',
              width: "100%",
              height: "100%",
              bg: "gray.300",
              opacity: "0.5"
            }}
          >
            <Box
              position={'absolute'}
              left='50%'
              top={'50%'}
              transform={"translate(-50%,-50%"}
            >
              <Text fontWeight={'600'} color={'white'} cursor={"pointer"} fontSize={"25px"}>+1 ảnh</Text>
            </Box>
            <Image rounded={'lg'} src='https://toidicafe.vn/static/images/place/manoir-cafe/57730e48-1fe6-4d2d-8305-4c24202689e5.jpg' w={'100%'} maxH='100%' objectFit={'cover'} />
          </Box> */}
    </SimpleGrid>
  )
}

export default ImagesPlace