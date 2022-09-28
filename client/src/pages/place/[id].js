import { Box, Button, Container, Heading, SimpleGrid, SkeletonText, Text } from '@chakra-ui/react'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPlaceSingle } from '../../redux/actions/placeAction'
import DetailTop from './components/DetailTop'
import ImagesPlace from './components/ImagesPlace'
import DetailInfo from './components/DetailInfo'
import UntitiesPlaceSingle from './components/UntitiesPlaceSingle'
import ImageSwipper from './components/ImageSwipper'
import RatePlace from './components/RatePlace'
import ReviewPlace from './components/ReviewPlace'
import { scrollToTop } from '../../untils/helper'
import MapDetail from './components/MapDetail'
const Single = () => {
  const { id } = useParams()
  const loading = false
  const detail_place = useSelector(state => state.detail_place)
  const { callbackReview } = useSelector(state => state.review)
  const dispatch = useDispatch()
  useEffect(() => {
    if (id)
      dispatch(getPlaceSingle(id))
  }, [id, callbackReview])
  useEffect(() => {
    scrollToTop()
  }, [])

  return (
    <Container maxW={'1240px'} pt={"15px"} p={[0, '15px']}>
      <Box boxShadow="0 2px 8px rgb(0,0,0,15%)" p='6' rounded='md' bg='white'>
        <DetailTop
          name={detail_place.name}
          intro={detail_place.intro}
          address={detail_place.address}
        />
        <ImagesPlace
          images={detail_place.images}
        />
        <ImageSwipper
          images={detail_place.images} />
      </Box>
      <SimpleGrid columns={[1, 2]} spacing={10} my={3}>
        <DetailInfo
          infor={detail_place}
        />
        <MapDetail info={detail_place} />
      </SimpleGrid>
      <UntitiesPlaceSingle
        utities={detail_place.utities}
      />
      <ReviewPlace item={detail_place} />
    </Container >
  )
}

export default Single