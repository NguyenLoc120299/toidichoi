import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import ProfileStatus from './ProfileStatus'
import ReviewItem from './ReviewItemProfile'
import { BoxProfile } from './styled'

const ProfileContainer = () => {
    const auth = useSelector(state => state.auth)

    return (
        <Grid
            templateColumns={'repeat(3,1fr)'}
            gap={6}
        >
            <GridItem colSpan={[3, 1]} display={['grid', 'grid']}>
                <ProfileStatus />
            </GridItem>
            <GridItem colSpan={[3, 2]}>
                {
                    auth.reviews ?
                        auth.reviews.map(item => (
                            <BoxProfile key={item._id}>
                                <ReviewItem reviewItem={item} />
                            </BoxProfile>
                        ))

                        : <p>Loading...</p>
                }

            </GridItem>
        </Grid >
    )
}

export default ProfileContainer