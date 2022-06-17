import { Box, Container, Flex, grid, Grid, GridItem, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListAllReviews } from '../redux/actions/reviewAction'
import ExploreFee from './components/explore/ExploreFeed'
import ExplorerSidebar from './components/explore/ExplorerSidebar'

const Explore = () => {
    const dispatch = useDispatch()
    const explores = useSelector(state => state.review.explore)

    useEffect(() => {
        dispatch(getListAllReviews())
    }, [dispatch])
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
                        {
                            explores && explores.map(item => (
                                <ExploreFee
                                    item={item}
                                    key={item._id}
                                />
                            ))
                        }

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