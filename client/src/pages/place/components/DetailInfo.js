import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { BiTime } from 'react-icons/bi'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'
import { GrMail } from 'react-icons/gr'
// import { BsFacebook, BsInstagram, } from 'react-icons/bs'
const DetailInfo = ({ info }) => {
    return (
        <Box boxShadow='md' rounded={'md'} p='6'>
            <Heading as={'h3'} size='md' mb={5}>Thông tin chi tiết</Heading>
            <Flex alignItems='center' mb={3}>
                <MdOutlineAttachMoney style={{ marginRight: '3px' }} />
                <Text>{info.price ? info?.price?.min : 0}đ - {info.price ? info?.price?.max : 0}đ</Text>
            </Flex>
            <Flex alignItems='center' mb={3}>
                <BiTime style={{ marginRight: '3px' }} />
                <Box>
                    <Text colorScheme={'green'}>Đang mở cửa - {info.time ? info.time.min : 0} - {info.time ? info.time.max : 0} </Text>
                </Box>
            </Flex>
            <Flex alignItems='center' mb={3}>
                <AiFillPhone style={{ marginRight: '3px' }} />
                <Box>
                    <Text>{info.phone === '' ? 'Chưa có thông tin' : info.phone}</Text>
                </Box>
            </Flex>
            <Flex alignItems='center' mb={3}>
                <GrMail style={{ marginRight: '3px' }} />
                <Box>
                    <Text>{info.email === '' ? 'Chưa có thông tin' : info.email}</Text>
                </Box>
            </Flex>
            {/* <Flex alignItems='center' mb={3}>
                <BsFacebook  style={{ marginRight: '3px' }} />
            </Flex> */}
        </Box>
    )
}

export default DetailInfo