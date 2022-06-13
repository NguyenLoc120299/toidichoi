import { Box, Container, Flex, grid, Grid, GridItem, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import ExploreFee from './components/explore/ExploreFeed'
import ExplorerSidebar from './components/explore/ExplorerSidebar'

const Explore = () => {
    return (
        <Box
            w={'100%'}
            h="100%"
            minH={'calc(100vh - 360px)'}
            bgGradient="linear(to bottom ,red.100, pink.50)"
        >
            <Container maxW={'1280px'} py="10px">
                <Grid templateColumns={"repeat(3, 1fr)"} gap="20px">
                    <GridItem colSpan={[3, 2]}>
                        <ExploreFee
                        />
                    </GridItem>
                    <GridItem colSpan={[0, 1]} display={['none', 'grid']}>
                        <ExplorerSidebar />
                    </GridItem>

                </Grid>

            </Container>
        </Box>
    )
}

export default Explore