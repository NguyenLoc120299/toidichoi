import { Box, Container, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import CardItem from '../../../components/CardItem'
const Trending = () => {
    const {place}= useSelector(state=>state)
    return (
        <Container maxW={"1200px"}>
            <Box py={5}>
                <div className='title'>Địa điểm nổi bật</div>
            </Box>
            <SimpleGrid columns={[1, 4]} spacing={10}>
                {
                    place.data.map(item=>(
                        <Box key={item._id}>
                            <CardItem item={item}/>
                        </Box>
                    ))
                }        
            </SimpleGrid>
        </Container>
    )
}

export default Trending