import { Box, Center, Grid, GridItem, Text } from '@chakra-ui/react'
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
                    auth.reviews ? (
                        auth.reviews.length > 0 ?
                            auth.reviews.map(item => (
                                <BoxProfile key={item._id}>
                                    <ReviewItem reviewItem={item} />
                                </BoxProfile>
                            ))
                            :
                            <Center mb={5}>
                                <Box>
                                    <img src='https://doodleipsum.com/300x300?i=efa3cc3ca3f9a0726826808670992aa1' />
                                    <Center>
                                        <Text as={'h3'} fontWeight={700} fontSize={'30px'}>Chưa có review nào</Text>
                                    </Center>
                                </Box>
                            </Center>

                    )

                        :
                        <Center>
                            <img src='https://doodleipsum.com/300x300?i=efa3cc3ca3f9a0726826808670992aa1' />
                        </Center>
                }

            </GridItem>
        </Grid >
    )
}

export default ProfileContainer