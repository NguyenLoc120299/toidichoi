import { Box, Container, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import CardItem from '../../../components/CardItem'
const Trending = () => {
    return (
        <Container maxW={"1200px"}>
            <Box py={5}>
                <div className='title'>Địa điểm nổi bật</div>
            </Box>
            <SimpleGrid columns={[1, 4]} spacing={10}>
                <Box >
                    <CardItem />
                </Box>
                <Box >
                    <CardItem />
                </Box>
                <Box >
                    <CardItem />
                </Box>
                <Box >
                    <CardItem />
                </Box>
                <Box >
                    <CardItem />
                </Box>
            </SimpleGrid>
        </Container>
    )
}

export default Trending