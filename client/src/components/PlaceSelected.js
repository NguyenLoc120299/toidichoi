import { Box, Center, Flex, Image, Text } from '@chakra-ui/react'
import Rate from 'rc-rate/lib/Rate'
import React from 'react'

const PlaceSelected = ({item}) => {
  return (
    <Center w={'100%'} h={'100%'}>
      <Box w={'100%'} h={"100%"}>
        <Flex>
          <Box w={'210px'} height='100%' mr={5}>
            <Image src={item.images[0]} />
          </Box>
          <Center>
            <Flex direction={'column'}>
              <Text fontWeight={'700'}>{item.name}</Text>
              <Text>{item.address}</Text>
              <span><Rate value={item.rate.rateNumber} allowHalf disabled character={<i className="anticon anticon-star" />} /> - {item.rate.turnNumber} đánh giá</span>
            </Flex>
          </Center>
          
        </Flex>
      </Box>
    </Center>
   
  )
}

export default PlaceSelected