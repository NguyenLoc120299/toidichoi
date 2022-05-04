import { Box, Flex, Image, Text } from '@chakra-ui/react'
import Rate from 'rc-rate/lib/Rate'
import React from 'react'

const PlaceSelected = ({item}) => {
  return (
    <Box w={'100%'} h={"100%"}>
        <Flex>
            <Box w={'210px'} height='100%' mr={5}>
                <Image src={item.images[0]}/>
            </Box>
            <Flex direction={'column'}>
                <Text fontWeight={'500'}>{item.name}</Text>
                <Text>{item.address}</Text>
                  <span><Rate value={item.rate.rateNumber} allowHalf disabled character={<i className="anticon anticon-star" />} /> - {item.rate.turnNumber} đánh giá</span> 
            </Flex>
        </Flex>
    </Box>
  )
}

export default PlaceSelected