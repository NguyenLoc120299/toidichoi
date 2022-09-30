import { Container } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getReviewByAuth } from '../../redux/actions/reviewAction'
import AvatarProfile from '../components/profile/AvatarProfile'
import ProfileContainer from '../components/profile/ProfileContainer'
import ProfileNavigation from '../components/profile/ProfileNavigation'
import { scrollToTop } from '../../untils/helper'
import { getDataAPI } from '../../untils/fetchData'
const Profile = () => {
    const auth = useSelector(state => state.auth)
    const [callBack, setCallBack] = useState(false)
    const [profile, setProfile] = useState(null)
    const { id } = useParams()
    const dispatch = useDispatch()
    const getReviewOfProfile = (id) => {
        dispatch(getReviewByAuth(id))
    }

    const getProfileDetail = async (id) => {
        try {
            const res = await getDataAPI(`user/${id}`)
            if (res && res.data)
                setProfile(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    const toggleCallBack = () => {
        setCallBack(!callBack)
    }
    useEffect(() => {
        if (id) {
            Promise.all([getProfileDetail(id), getReviewOfProfile(id)])
        }
    }, [id, callBack])
    useEffect(() => {
        scrollToTop()

    }, [])
    return (
        <Container maxW={'1280px'}>
            <AvatarProfile  />
            {
                profile &&
                <>
                    <ProfileNavigation user={profile} toggleCallBack={toggleCallBack} />
                    <ProfileContainer user={profile} />
                </>
            }

        </Container>
    )
}

export default Profile