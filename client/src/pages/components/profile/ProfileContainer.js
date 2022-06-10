import { Box, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import ReviewItem from './ReviewItemProfile'
import { BoxProfile } from './styled'

const ProfileContainer = () => {
    const auth = useSelector(state => state.auth)

    return (
        <Grid
            templateColumns={'repeat(3,1fr)'}
            gap={6}
        >
            <GridItem colSpan={1}>
                <BoxProfile>
                    <h1>aaaaaaa</h1>
                </BoxProfile>
            </GridItem>
            <GridItem colSpan={2}>
                {
                    auth.reviews ?
                        <BoxProfile>
                            <ReviewItem />
                        </BoxProfile>
                        : <p>Loading...</p>
                }

            </GridItem>
        </Grid>
    )
}

export default ProfileContainer