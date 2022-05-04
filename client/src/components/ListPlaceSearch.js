import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'

const ListPlaceSearch = ({item,selectePlace}) => {
  return (
      <Box my={5} cursor={"pointer"} onClick={() => selectePlace(item)}>
          <Flex alignItems={'center'}>
              <Box w={'40px'} height={'40px'} borderRadius={5} overflow='hidden'>
                  <Image src={item.images[0]} maxW="100%" minW={'100%'} maxH="100%" minH={"100%"} objectFit={'cover'} />
              </Box>
              <Flex direction={'column'} ml={5}>
                  <Text fontWeight={'bold'}>{item.name}</Text>
                  <Text>{item.address}</Text>
              </Flex>

          </Flex>
      </Box>
  )
}

export default ListPlaceSearch