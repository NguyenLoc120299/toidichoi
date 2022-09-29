import { Box, Container, Flex, grid, Grid, GridItem, SimpleGrid, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListAllReviews, getListAllReviewsFirst } from '../redux/actions/reviewAction'
import ExploreFee from './components/explore/ExploreFeed'
import ExplorerSidebar from './components/explore/ExplorerSidebar'
import InfiniteScroll from "react-infinite-scroll-component";
import { scrollToTop } from "../untils/helper"
const Explore = () => {
    const dispatch = useDispatch()
    const { explore, total } = useSelector(state => state.review)
    const [page, setPage] = useState(1)
    const [hasMore, setHasMore] = useState(true)
    const [typeExplore, setTypeExplore] = useState(1)
    const limit = 10
    const auth= useSelector(state=>state.auth)
    const pageCount = Math.ceil(total / limit);
    const [isScroll, setIsScroll] = useState(false)
    useEffect(() => {
        scrollToTop()
    
    }, [])
    useEffect(()=>{
        dispatch(getListAllReviewsFirst(page, limit, typeExplore, auth))
    },[typeExplore])
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setIsScroll(window.scrollY > 20);
        });
    }, []);
    const fetchMoreData = () => {
        const currentPage = page + 1
        dispatch(getListAllReviews(currentPage, limit, typeExplore, auth))
        if (pageCount===currentPage) setHasMore(false)
    };
    return (
        <Box
            w={'100%'}
            h="100%"
            minH={'calc(100vh - 360px)'}
        >
            {
                auth?.token &&
                <Box w={"100%"} position={'sticky'} top={0} zIndex={99} display={['block','none']}>
                    <Flex w={'100%'} justifyContent={'center'} gap={6} bg={isScroll && 'white'} padding={'15px 0'}>
                        <Box
                            fontSize={'16px'}
                            fontWeight={700}
                            color={"#000"}
                            borderBottom={typeExplore === 1 && 'solid 2px #E33858'}
                            cursor={'pointer'}
                            onClick={() => setTypeExplore(1)}
                        >Review nổi bật</Box>
                        <Box
                            fontSize={'16px'}
                            fontWeight={700}
                            color={"#000"}
                            borderBottom={typeExplore === 2 && 'solid 2px #E33858'}
                            cursor={'pointer'}
                            onClick={() => setTypeExplore(2)}
                        >Đang theo dõi</Box>
                    </Flex>
                </Box>
            }
            
            <Container maxW={'1280px'} py="10px">
                <div class="exploreHeader"></div>

                <Grid templateColumns={"repeat(3, 1fr)"} gap="20px">
                    <GridItem colSpan={[3, 2]}>
                        <InfiniteScroll
                            dataLength={explore.length}
                            next={fetchMoreData}
                            hasMore={hasMore}
                            loader={<Box padding="12px 16px"
                                marginBottom="20px"
                                backgroundColor="#fff"
                                borderRadius="10px"
                                className='box-shadow'>
                                <Flex>
                                    <SkeletonCircle size='10' />
                                </Flex>
                                <SkeletonText my='4' noOfLines={2} spacing='4' />
                                <Skeleton height={250} borderBottom="1px solid #eee" mb={3} />
                            </Box>}

                        >
                            {
                                explore.length > 0 ? explore.map(item => (
                                    <ExploreFee
                                        item={item}
                                        key={item._id}
                                    />
                                )) :
                                    [1, 2, 3].map((item, index) => (
                                        <Box padding="12px 16px" key={index}
                                            marginBottom="20px"
                                            backgroundColor="#fff"
                                            borderRadius="10px"
                                            className='box-shadow'>
                                            <Flex>
                                                <SkeletonCircle size='10' />
                                            </Flex>
                                            <SkeletonText my='4' noOfLines={2} spacing='4' />
                                            <Skeleton height={250} borderBottom="1px solid #eee" mb={3} />
                                        </Box>
                                    ))
                            }
                        </InfiniteScroll>
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