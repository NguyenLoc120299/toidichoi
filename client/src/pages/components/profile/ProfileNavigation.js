import { Box, Button, Flex, Link, Wrap, WrapItem } from '@chakra-ui/react'
import React from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
const ProfileNavigation = () => {
    return (
        <Box
            background={'#fff'}
            boxShadow="0 2px 2px 0 rgb(189 171 171 / 20 %)"
            overflowX="auto"
        >
            <Box
                display={'flex'}
                justifyContent={"space-between"}
                borderTop="1px solid #ddd"
            >
                <Wrap>
                    <WrapItem>
                        <Link href='#'
                            display="block"
                            fontWeight="500"
                            padding="10px 14px"
                            color="#000"
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
                        >
                            Đánh giá
                        </Link>
                    </WrapItem>
                </Wrap>
                <Wrap>
                    <WrapItem>
                        <Button
                            padding="6px 18px"
                            marginLeft=" 6px"
                            marginTop="6px"
                            borderRadius="6px"
                            fontWeight="500"
                            color="#000"
                            background="#efefef"
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
                            colorScheme={'facebook'}
                            leftIcon={<FaFacebook />}
                        />

                    </WrapItem>
                    <WrapItem>
                        <Button
                            padding="6px 18px"
                            marginLeft=" 6px"
                            marginTop="6px"
                            borderRadius="6px"
                            fontWeight="500"
                            background={''}
                            leftIcon={<FaInstagram />}
                        />

                    </WrapItem>
                </Wrap>

            </Box>
        </Box>
    )
}

export default ProfileNavigation