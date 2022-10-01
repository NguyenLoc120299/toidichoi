import { Box, Flex, Heading, SkeletonText, Text } from '@chakra-ui/react'
import React from 'react'
import { BiTime } from 'react-icons/bi'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'
import { GrMail } from 'react-icons/gr'
import moment from 'moment'
import { FaFacebook } from 'react-icons/fa'
// import { BsFacebook, BsInstagram, } from 'react-icons/bs'
const DetailInfo = ({ infor, loading }) => {
    const isOpenning = (timeMin, timeMax) => {
        const currentHour = moment().format('HH:mm')
        if (moment(currentHour, 'HH:mm').isBefore(moment(timeMax, 'HH:mm')) &&

            moment(currentHour, 'HH:mm').isAfter(moment(timeMin, 'HH:mm'))) {
            return true
        }
        else {
            return false
        }
    }

    return (
        <Box boxShadow="0 2px 8px rgb(0,0,0,15%)" rounded={'md'} p='6'>
            {
                !infor ? <SkeletonText noOfLines={4} spacing='4' />
                    : <Box>
                        <Heading as={'h3'} size='md' mb={5}>Thông tin chi tiết</Heading>
                        <Flex alignItems='center' mb={3} gap={6}>
                            <MdOutlineAttachMoney style={{ marginRight: '3px', fontSize: '20px' }} />
                            <Text fontSize={'16px'} fontWeight={500}>{infor.price ? infor?.price?.min : 0}đ - {infor.price ? infor?.price?.max : 0}đ</Text>
                        </Flex>
                        <Flex alignItems='center' mb={3} gap={6}>
                            <BiTime style={{ marginRight: '3px', fontSize: '20px' }} />
                            <Box>
                                <Text fontSize={'16px'} fontWeight={500} >
                                    <span style={{
                                        color: isOpenning(infor.time ? infor.time.min : 0, infor.time ? infor.time.max : 0) ? 'green' : '#e03',
                                        fontWeight: '700'
                                    }}>
                                        {isOpenning(infor.time ? infor.time.min : 0, infor.time ? infor.time.max : 0) ? "Đang mở cửa" : "Chưa mở cửa"}
                                    </span> - {infor.time ? infor.time.min : 0} - {infor.time ? infor.time.max : 0} </Text>
                            </Box>
                        </Flex>
                        <Flex alignItems='center' mb={3} gap={6}>
                            <AiFillPhone style={{ marginRight: '3px', fontSize: '20px' }} />
                            <a href={`tel:${infor.phone}`}>
                                <Text fontSize={'16px'} fontWeight={500}>{infor.phone === '' ? 'Chưa có thông tin' : infor.phone}</Text>
                            </a>
                        </Flex>
                        {
                            infor.facbook !== "" &&
                            <Flex alignItems='center' mb={3} ga={6} gap={6}>
                                <FaFacebook style={{ marginRight: '3px', fontSize: '20px' }} />
                                <a href={infor.facbook} target={'_blank'}>
                                    <Text fontSize={'16px'} fontWeight={500} color={"#0770cd"}>{infor.name}</Text>
                                </a>
                            </Flex>
                        }

                    </Box>
            }
            {/* <Flex alignItems='center' mb={3}>
                <BsFacebook  style={{ marginRight: '3px' }} />
            </Flex> */}
        </Box>
    )
}

export default DetailInfo