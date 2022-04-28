import { Heading, Text } from '@chakra-ui/react'
import React from 'react'

const DetailTop = (props) => {
  return (
      <>
          <Heading size={'xl'} as='h1' py={1}>
              {props.name}
          </Heading>
          <Text fontSize={'lg'} py={1}>
              {props.intro}
          </Text>
          <Text fontSize={'lg'} py={1}>
              {props.address}
          </Text>
      </>
  )
}

export default DetailTop