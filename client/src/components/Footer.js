import { Box, Center, Flex, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import style from '../style.module.css'
import { logo } from './Navbar'
import { FaRegHandshake } from 'react-icons/fa'
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'
import { Link } from 'react-router-dom'
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
                        <a className={style.contact} href={'https://www.facebook.com/loc120299/'} target={"_blank"}>
                            <FaRegHandshake style={{ fontSize: "30px", marginRight: "10px" }} />  Hợp tác với chúng tôi
                        </a>
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
                                    <Link to="/contact">
                                        Liên hệ
                                    </Link>
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
                                <li >
                                    <a href="#" className='facebook_icon'>
                                        <i className="fab fa-facebook" style={{ paddingRight: "12px" }}></i> {" "}
                                        <span>Facebook</span>
                                    </a>
                                </li>
                                <li className='instagram_icon'>
                                    <a href="#" className='instagram_icon'>
                                        <i className="fab fa-instagram" style={{ paddingRight: "12px" }}></i> {" "}
                                        <span>Instagram</span>
                                    </a>
                                </li>
                                <a href='#' className='tiktok_icon'>
                                    <i className="fab fa-tiktok" style={{ paddingRight: "12px" }}></i> {" "}
                                    <span >Tiktok</span>
                                </a>
                            </ul>
                        </div>

                    </Center>
                </Box>
            </SimpleGrid>
        </div>
    )
}

export default Footer