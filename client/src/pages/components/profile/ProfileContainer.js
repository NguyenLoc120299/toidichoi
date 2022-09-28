import { Box, Center, Grid, GridItem, Text } from '@chakra-ui/react'
import { async } from '@firebase/util'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ALERT_ACTION } from '../../../redux/actions/alertAction'
import { getDataAPI } from '../../../untils/fetchData'
import ProfileStatus from './ProfileStatus'
import ReviewItem from './ReviewItemProfile'
import { BoxProfile } from './styled'

const ProfileContainer = ({ user }) => {
    const auth = useSelector(state => state.auth)
    const [reviews, setReviews] = useState(null)
    const dispatch = useDispatch()
    const getReviewByAuth = async (id) => {
        try {
            const res = await getDataAPI(`list-reviews/${id}`,)
            if (res.data)
                setReviews(res.data)
        } catch (error) {
            dispatch({
                type: ALERT_ACTION.ALERT,
                payload: {
                    err: error.response.data.msg
                }
            })
        }
    }
    useEffect(() => {
        if (user)
            getReviewByAuth(user._id)
    }, [user])
    return (
        <Grid
            templateColumns={'repeat(3,1fr)'}
            gap={6}
        >
            <GridItem colSpan={[3, 1]} display={['grid', 'grid']}>
                <ProfileStatus reviews={reviews} user={user} />
            </GridItem>
            <GridItem colSpan={[3, 2]}>
                {
                    reviews?.dataReview ? (
                        reviews?.dataReview.length > 0 ?
                            reviews?.dataReview.map(item => (
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