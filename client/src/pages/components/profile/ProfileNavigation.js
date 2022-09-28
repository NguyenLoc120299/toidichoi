import { Box, Button, Flex, Link, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaInstagram, FaEllipsisH } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
const ProfileNavigation = () => {
    const history = useHistory()
    return (
        <Box
            background={'#fff'}
            boxShadow="0 2px 2px 0 rgb(189 171 171 / 20 %)"

        >
            <Box
                display={'flex'}
                justifyContent={"space-between"}
                borderTop={["none", "1px solid #ddd"]}
                flexDirection={["column-reverse", "row"]}
            >
                <Wrap
                    borderTop={['1px solid #ddd', 'none']}
                    borderBottom={['1px solid #ddd', 'none']}
                    margin={"15px 0"}
                    position={["sticky", 'relative']}
                    top={0}
                    className="list___wrapper"
                    >
                    <WrapItem>
                        <Link href='#'
                            className='active'
                            display="block"
                            fontWeight="500"
                            padding="10px 14px"
                            color="#000"
                            _focus={{ border: 'unset' }}
                        >
                            Đánh giá
                        </Link>
                    </WrapItem>
                    <WrapItem>
                        <Link href='#'
                            display="block"
                            fontWeight="500"
                            padding="10px 14px"
                            color="#000"
                            _focus={{ border: 'unset' }}
                        >
                            Đã lưu
                        </Link>
                    </WrapItem>
                    <WrapItem>
                        <Link href='#'
                            display="block"
                            fontWeight="500"
                            padding="10px 14px"
                            color="#000"
                            _focus={{ border: 'unset' }}
                        >
                            Người theo dõi
                        </Link>
                    </WrapItem>
                    <WrapItem>
                        <Link href='#'
                            display="block"
                            fontWeight="500"
                            padding="10px 14px"
                            color="#000"
                            _focus={{ border: 'unset' }}
                        >
                            Đang theo dõi
                        </Link>
                    </WrapItem>
                </Wrap>
                <Wrap className='m_menu' display={'flex'} justifyContent={'center'}>
                    <WrapItem>
                        <Button
                            padding="6px 18px"
                            marginLeft=" 6px"
                            marginTop="6px"
                            borderRadius="6px"
                            fontWeight="500"
                            color="#000"
                            background="#efefef"
                            onClick={() => history.push('/profile/setting')}
                        >
                            Chỉnh sửa
                        </Button>
                    </WrapItem>
                    <WrapItem>
                        <Button
                            padding="6px 18px"
                            marginLeft=" 6px"
                            marginTop="6px"
                            borderRadius="6px"
                            fontWeight="500"

                        >
                            <FaFacebook />
                        </Button>

                    </WrapItem>
                    <WrapItem>
                        <Button
                            padding="6px 18px"
                            marginLeft=" 6px"
                            marginTop="6px"
                            borderRadius="6px"
                            fontWeight="500"
                        >
                            <FaInstagram />
                        </Button>

                    </WrapItem>
                    <WrapItem>
                        <Button
                            padding="6px 18px"
                            marginLeft=" 6px"
                            marginTop="6px"
                            borderRadius="6px"
                            fontWeight="500"
                        >
                            <FaEllipsisH />
                        </Button>

                    </WrapItem>
                </Wrap>

            </Box>
        </Box>
    )
}

export default ProfileNavigation