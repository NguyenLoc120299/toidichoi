import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPlaceSingle } from '../../redux/actions/placeAction'
import { Skeleton, SkeletonText } from '@chakra-ui/react'
import DetailTop from './components/DetailTop'
import ImagesPlace from './components/ImagesPlace'
const Single = () => {
  const { id } = useParams()
  const [place, setPlace] = useState([])
  const { detail_place } = useSelector(state => state)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPlaceSingle(id))
  }, [dispatch, id])
  return (
    <Container maxW={'1240px'}>

      <Box boxShadow='md' p='6' rounded='md' bg='white'>
        <DetailTop name={detail_place.name} intro={detail_place.intro} address={detail_place.address}/>
        <ImagesPlace images={detail_place.images}/>
      </Box>
      <SimpleGrid columns={[1, 2]} spacing={10} my={3}>

        <Box boxShadow='md' rounded={'md'} p='6'>
          <Heading as={'h3'} size='md'>Thông tin chi tiết</Heading>
        </Box>
        <Box boxShadow='md' rounded={'md'} p='6'>
          <Heading as={'h3'} size='md'>Địa điểm cụ thể</Heading>
        </Box>
      </SimpleGrid>
      <Box boxShadow='md' p='6' rounded='md' bg='white' my={3}>
        aaa
      </Box>
      <SimpleGrid columns={[1, 2]} spacing={10} my={3}>
        <Box boxShadow='md' rounded={'md'} p={['3', '6']}>
          <Flex justifyContent={'space-between'} alignItems={'center'} py={3}>
            <Heading as={'h3'} size={['lg']} >Đánh giá từ cộng đồng</Heading>
            <Button colorScheme={'red'} borderRadius={'12px'}>Viết đánh giá</Button>
          </Flex>
          <Box
            height={'180px'}
            padding="10px 16px"
            bg={'red.100'}
            borderRadius="20px" position={'relative'}
            _after={{
              position: "absolute",
              content: '""',
              top: "-10px",
              right: '36px',
              bottom: 'auto',
              left: 'auto',
              width: 0,
              height: 0,
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderBottom: '10px solid #ffdcd8'

            }}
          >

          </Box>
        </Box>
        <Box boxShadow='md' rounded={'md'} p='6'>
          <Heading as={'h3'} size='md'>Đánh giá</Heading>
        </Box>
      </SimpleGrid>
    </Container>
  )
}

export default Single