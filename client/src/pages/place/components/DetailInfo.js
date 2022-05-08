import { Box, Flex, Heading, SkeletonText, Text } from '@chakra-ui/react'
import React from 'react'
import { BiTime } from 'react-icons/bi'
import { MdOutlineAttachMoney } from 'react-icons/md'
import { AiFillPhone } from 'react-icons/ai'
import { GrMail } from 'react-icons/gr'
// import { BsFacebook, BsInstagram, } from 'react-icons/bs'
const DetailInfo = ({ infor, loading }) => {
    return (
        <Box boxShadow='md' rounded={'md'} p='6'>
            {
                !infor ? <SkeletonText noOfLines={4} spacing='4' />
                    : <Box>
                        <Heading as={'h3'} size='md' mb={5}>Thông tin chi tiết</Heading>
                        <Flex alignItems='center' mb={3}>
                            <MdOutlineAttachMoney style={{ marginRight: '3px' }} />
                            <Text>{infor.price ? infor?.price?.min : 0}đ - {infor.price ? infor?.price?.max : 0}đ</Text>
                        </Flex>
                        <Flex alignItems='center' mb={3}>
                            <BiTime style={{ marginRight: '3px' }} />
                            <Box>
                                <Text colorScheme={'green'}>Đang mở cửa - {infor.time ? infor.time.min : 0} - {infor.time ? infor.time.max : 0} </Text>
                            </Box>
                        </Flex>
                        <Flex alignItems='center' mb={3}>
                            <AiFillPhone style={{ marginRight: '3px' }} />
                            <Box>
                                <Text>{infor.phone === '' ? 'Chưa có thông tin' : infor.phone}</Text>
                            </Box>
                        </Flex>
                        <Flex alignItems='center' mb={3}>
                            <GrMail style={{ marginRight: '3px' }} />
                            <Box>
                                <Text>{infor.email === '' ? 'Chưa có thông tin' : infor.email}</Text>
                            </Box>
                        </Flex>
                    </Box>
            }
            {/* <Flex alignItems='center' mb={3}>
                <BsFacebook  style={{ marginRight: '3px' }} />
            </Flex> */}
        </Box>
    )
}

export default DetailInfo