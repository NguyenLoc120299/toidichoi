import { Box, Center, Container, Text } from '@chakra-ui/react'
import React from 'react'
import AvatarProfile from './components/profile/AvatarProfile'
import ProfileContainer from './components/profile/ProfileContainer'
import ProfileNavigation from './components/profile/ProfileNavigation'

const Profile = () => {
    return (
        <Container maxW={'1280px'}>
            <AvatarProfile />
            <ProfileNavigation />
            <ProfileContainer />
        </Container>
    )
}

export default Profile