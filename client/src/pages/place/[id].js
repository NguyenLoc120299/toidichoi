import { Box, Container, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const Single = () => {
  return (
    <Container maxW={'1240px'}>
      <Box boxShadow='md' p='6' rounded='md' bg='white'>
        <Heading size={'xl'} as='h1'>
          Jouri Dessert & Tea
        </Heading>
        <Text fontSize={'lg'}>
          Delivering the best dessert & tea, fresh & unique decoration and good service in the heart of Hanoi.
        </Text>
        <Text fontSize={'lg'}>
          Số 10 Khúc Hạo, Ba Đình — Hiển thị bản đồ — Xem đường đi — Xem menu</Text>
        <SimpleGrid columns={[1, 3]} spacing={10} my={3} display={['none', 'grid']}>
          <Box   height={'355px'}>
            <Image rounded={'lg'} src='https://toidicafe.vn/static/images/place/manoir-cafe/57730e48-1fe6-4d2d-8305-4c24202689e5.jpg' w={'100%'} maxH='100%' objectFit={'cover'} />
          </Box>
          <Box  height={'355px'}> 
            <Image rounded={'lg'} src='https://toidicafe.vn/static/images/place/floralia-tearoom-and-wine-bistro/2e2a633e-1296-4406-8712-b8c92c2630e7.jpg' w={'100%'} maxH='100%' objectFit={'cover'} />
          </Box>
          <Box  height={'355px'}
           position='relative'
           _before={{
             content: '""',
             position:'absolute',
             width: "100%",
             height: "100%",
             bg: "gray.100",
             opacity:"0.3"
           }}
           >
             <Text 
             position={'absolute'}
             left='50%'
             top={'50%'}
             transform={"translate(-50%,-50%"}
             fontWeight={'bold'}
             color="gray.50"
             >+1 ảnh</Text>
            <Image rounded={'lg'} src='https://toidicafe.vn/static/images/place/manoir-cafe/57730e48-1fe6-4d2d-8305-4c24202689e5.jpg' w={'100%'} maxH='100%' objectFit={'cover'}/>
          </Box>
        </SimpleGrid>
      </Box>
      <SimpleGrid columns={[1, 3]} spacing={10} my={3}>
        <Box boxShadow='md' rounded={'md'} >a</Box>
        <Box boxShadow='md' rounded={'md'} p='6'>a</Box>
        <Box boxShadow='md' rounded={'md'} p='6'>a</Box>
      </SimpleGrid>
      <Box boxShadow='md' p='6' rounded='md' bg='white' my={3}>
        aaa
      </Box>
      <SimpleGrid columns={[1, 2]} spacing={10} my={3}>
        <Box boxShadow='md' rounded={'md'} p='6'>a</Box>
        <Box boxShadow='md' rounded={'md'} p='6'>a</Box>
      </SimpleGrid>
    </Container>
  )
}

export default Single