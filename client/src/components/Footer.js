import { Box, Center, Flex, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import style from '../style.module.css'
import { logo } from './Navbar'
import { FaRegHandshake } from 'react-icons/fa'
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'
const Footer = () => {
    return (
        <div className={style.footer}>
            <SimpleGrid columns={3} spacing={10}>
                <Box>
                    <Center>
                        <Flex>
                            {logo}
                        </Flex>
                    </Center>
                    <Center mt={10}>
                        <div className={style.contact}>
                            <FaRegHandshake style={{ fontSize: "30px", marginRight: "10px" }} />  Hợp tác với chúng tôi
                        </div>
                    </Center>

                </Box>
                <Box>
                    <Center>
                        <div>
                            <div className={style.title}>
                                Về chúng tôi
                            </div>
                            <ul className={style.text}>
                                <li>
                                    Giới thiệu
                                </li>
                                <li>
                                    Giải đáp thắc mắc
                                </li>
                                <li>
                                    Liên hệ
                                </li>
                                <li>
                                    Điều khoản sử dụng
                                </li>
                            </ul>
                        </div>
                    </Center>

                </Box>
                <Box>
                    <Center>
                        <div>
                            <div className={style.title}>
                                Theo dõi chúng tôi trên
                            </div>
                            <ul className={style.text}>
                                <li>
                                    <span><FaFacebookF /> </span> Facebook
                                </li>
                                <li>
                                    <span><FaInstagram /></span> Instagram
                                </li>
                                <li>
                                    <span><FaTiktok /></span>  Tiktok
                                </li>
                            </ul>
                        </div>

                    </Center>
                </Box>
            </SimpleGrid>
        </div>
    )
}

export default Footer