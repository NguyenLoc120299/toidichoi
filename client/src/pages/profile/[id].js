import { Box, Center, Container, Text, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getReviewByAuth } from '../../redux/actions/reviewAction'
import AvatarProfile from '../components/profile/AvatarProfile'
import ProfileContainer from '../components/profile/ProfileContainer'
import ProfileNavigation from '../components/profile/ProfileNavigation'
import { scrollToTop } from '../../untils/helper'
const Profile = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const getReviewOfProfile = (auth) => {
        dispatch(getReviewByAuth(auth))
    }
    useEffect(() => {
        if (auth.token)
            getReviewOfProfile(auth)
    }, [auth.token])
    useEffect(() => {
        scrollToTop()
    }, [])
    return (
        <Container maxW={'1280px'}>
            <AvatarProfile />
            <ProfileNavigation />
            <ProfileContainer />
        </Container>
    )
}

export default Profile