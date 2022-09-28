import { Box, Center, Skeleton, SkeletonCircle, SkeletonText, Text } from '@chakra-ui/react'
import React from 'react'
import { BsCameraFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfile } from '../../../redux/actions/authAction'
const AvatarProfile = ({ user }) => {

    const dispatch = useDispatch()
    const auth = useSelector(state => state.auth)
    const handleOnchangeAvatar = (e) => {
        const files = [...e.target.files]
        dispatch(updateProfile(user.username, files, auth))
    }
    return (
        <Box
            w={'100%'}
            position={"relative"}
            paddingBottom={"100px"}
        >
            <Center
                position={'relative'}
                w={'100%'}
                height={'250px'}
                padding={'20px 40px'}
                borderBottomLeftRadius='16px'
                borderBottomRightRadius='16px'
                className='custom_btn'
            >
                <Center
                    flexDirection={'column'}
                    position={'absolute'}
                    top={'34%'}
                >
                    {
                        user ? <Box
                            position="relative"
                            width="200px"
                            height="200px"
                            padding="6px"
                            borderRadius="50%"
                            background="#fff"
                        >
                            <Box
                                backgroundImage={`url(${user.avatar})`}
                                backgroundPosition={'50%'}
                                backgroundSize={'cover'}
                                backgroundRepeat={"no-repeat"}
                                backgroundColor={'#fff'}
                                border={"none"}
                                width={"100%"}
                                h={'100%'}
                                borderRadius={"50%"}
                            >

                            </Box>
                            <Box
                                background={"#ddd"}
                                position={"absolute"}
                                top="auto"
                                right="20px"
                                bottom={'10px'}
                                left='auto'
                                cursor={'pointer'}
                                w={"38px"}
                                h={'38px'}
                                fontSize={"20px"}
                                lineHeight={"38px"}
                                textAlign={"center"}
                                borderRadius={"50%"}
                                color="#404040"
                                display={'flex'}
                                justifyContent={'center'}
                                alignItems={'center'}
                            >
                                <Center>
                                    <label htmlFor='upload_avatar'>
                                        <BsCameraFill style={{ cursor: 'pointer' }} />
                                        <input type="file"
                                            name='file'
                                            multiple
                                            style={{ display: "none" }}
                                            onChange={handleOnchangeAvatar}
                                            id='upload_avatar'></input>
                                    </label>
                                </Center>
                            </Box>

                        </Box> :
                            <SkeletonCircle
                                width="200px"
                                height="200px"
                                padding="6px"
                                borderRadius="50%"
                                background="#fff"
                            />

                    }
                    {
                        user ? <Text as={'h1'}
                            display={'flex'}
                            justifyContent={"center"}
                            fontSize={'32px'}
                            fontWeight={700}
                        >
                            {user.username}
                        </Text>
                            :
                            <Skeleton height='20px' />
                    }



                </Center>
            </Center>
        </Box>
    )
}

export default AvatarProfile