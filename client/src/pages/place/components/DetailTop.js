import { Heading, Text, Skeleton,SkeletonText } from '@chakra-ui/react'
import React from 'react'

const DetailTop = (props) => {
    return (
        <>
            <Heading size={'xl'} as='h1' py={1}>
                {
                    props.loading ?
                        <SkeletonText w={'50%'} noOfLines={1}></SkeletonText> :
                        <p>{props.name}</p>
                }

            </Heading>
            <Text fontSize={'lg'} py={1}>
                {
                    props.loading ?  
                    <>
                            <SkeletonText noOfLines={5} spacing='1' mb={3}></SkeletonText>
                    </> :
                    <>
                            {props.intro}
                    </>   
                }     
            </Text>
            <Text fontSize={'lg'} py={1}>
                {props.address}
            </Text>
        </>
    )
}

export default DetailTop