import { Box, Container, Flex, Grid, GridItem, Skeleton, SkeletonCircle, SkeletonText, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDataAPI } from '../../untils/fetchData'
import ExploreFee from '../components/explore/ExploreFeed'
import PlaceTrending from '../components/explore/PlaceTrending'
import UserInfo from './UserInfo'

const ReviewDetail = () => {
    const { id } = useParams()
    const [detail, setDetail] = useState(null)
    const getReviewSingle = async (id) => {
        const res = await getDataAPI(`getReviewSingle/${id}`)
        setDetail(res.data);
    }

    useEffect(() => {
        if (id)
            getReviewSingle(id)
    }, [id])
    return (
        <Box
            w={'100%'}
            h="100%"
            minH={'calc(100vh - 360px)'}
            padding={'10px 0'}
        >
            <Container maxW={'1200px'}>
                <Grid templateColumns={"repeat(3, 1fr)"} gap={["0", "20"]}>
                    <GridItem colSpan={[3, 2]}>
                        {
                            detail ? (
                                <ExploreFee
                                    item={detail}
                                />)
                                :
                                <Box padding="12px 16px"
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
                        }
                    </GridItem>
                    <GridItem colSpan={[3, 1]}>
                        <UserInfo user={detail?.user} />
                        <PlaceTrending />
                    </GridItem>
                </Grid>
            </Container>
        </Box>
    )
}

export default ReviewDetail