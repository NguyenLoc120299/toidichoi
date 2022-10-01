import { Avatar, Box, Flex, Heading, Image, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from '../../../firebase'
import { formatTime } from '../../components/helper/moment'
import ImageLightbox from './ImageLightbox'

const BoxComment = (props) => {
    const [isOpen, setIsOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)
    const toggleImageLightBox = (index) => {
        setIsOpen(true)
        setPhotoIndex(index)
    }
    return (
        <Box p={[3, 5]}
            position={'relative'}
            marginLeft={props.isComment && ['30px', '0']}
            bg="gray.100"
            rounded={'xl'}
            _before={['', {
                position: "absolute",
                top: "25px",
                right: "auto",
                bottom: "auto",
                left: "-12px",
                content: "''",
                width: 0,
                height: 0,
                borderLeft: "8px solid transparent",
                borderRight: "8px solid transparent",
                borderBottom: " 8px solid #f5f5f7",
                transform: "translatey(-50%) rotate(-90deg)"
            }]}>
            <Box mb={5} >
                <Box
                    display={['flex']}
                    alignItems="center"
                    p={["10px 0"]}

                >
                    <Avatar
                        size='md'
                        name={props.username}
                        src={props.avatar}
                        display={['block', 'none']}
                        mr={5}
                    />{' '}
                    <Box display={'flex'} justifyContent={'space-between'}>
                        <Link to={`/profile/${props.id}`}>
                            <Heading as={'h3'} size={'sm'} mb={1}>{props.username}</Heading>
                        </Link>
                    </Box>
                </Box>

                <Box display={['none', 'block']}>
                    {
                        props.isComment ?

                            <Text color={'gray.500'} fontSize={"13px"}> {formatTime(props.createdAt)}</Text>
                            :
                            <Text color={'gray.500'} fontSize={"13px"}> Đã đánh giá {formatTime(props.createdAt)}</Text>
                    }
                </Box>
            </Box >
            <Box >
                <Text size={'md'}>{props.content}</Text>
            </Box>
            {
                props.images &&
                <Flex mt={5} flexWrap={'wrap'} >
                    {
                        props.images.map((item, index) => (
                            <Box
                                width={'90px'}
                                height={'90px'}
                                display="flex"
                                m={1}
                                borderRadius={"md"}
                                key={index}
                                onClick={() => toggleImageLightBox(index)}
                            >
                                <Image
                                    maxW={'100%'}
                                    maxH={"100%"}
                                    minH={"100%"}
                                    minW={"100%"}
                                    objectFit={'cover'}
                                    overflow="hidden"
                                    borderRadius={'md'}
                                    src={item}
                                    alt={index} />
                            </Box>
                        ))
                    }
                </Flex>
            }
            <ImageLightbox
                images={props.images}
                isOpen={isOpen}
                photoIndex={photoIndex}
                setIsOpen={setIsOpen}
                setPhotoIndex={setPhotoIndex}
            />
        </Box >
    )
}

export default BoxComment