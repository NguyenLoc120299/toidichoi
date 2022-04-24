import { Box, Button, Center, Container, Flex, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import style from './navbar.module.css'
import { FaSlackHash, FaPercentage } from 'react-icons/fa'
import { BsPencil } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import { IconButton } from '@chakra-ui/react'
import { useColorMode, useDisclosure } from '@chakra-ui/react';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';
import LoginModal from './LoginModal'

export const logo = (
    <>
        <img src='/assets/img/logo.png' style={{ maxWidth: '100 %' }} alt='' />
        <Center>
            <Link to="/home">
                <span className={style.logo}>Tôi đi chơi</span>
            </Link>
        </Center>
    </>

)
const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Container maxW={"100%"} className={style.nav}>
            <LoginModal isOpen={isOpen} onClose={onClose} />
            <Flex justifyContent="space-between" >
                <Box p='2' display={'flex'}>
                    {logo}
                </Box>
                <Box display={["none", "flex"]}>
                    <Center h={"100%"}>
                        <Flex justifyContent={"space-between"} alignItems="center">
                            <Link to="/explorer" style={{ marginRight: "1.5rem" }} className={style.links}>
                                <span> <FaSlackHash style={{ marginRight: '5px' }} /> Khám phá</span>
                            </Link>
                            <Link to="/promotion" className={style.links}>
                                <span> <FaPercentage style={{ marginRight: '5px' }} />Khuyến mãi</span>
                            </Link>
                        </Flex>
                    </Center>
                </Box>
                <Box display={["none", "flex"]}>
                    <Center>
                        <Button
                            aria-label="Toggle Color Mode"
                            onClick={toggleColorMode}
                            _focus={{ boxShadow: 'none' }}
                            w="fit-content"
                            mr='3'
                        >
                            {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
                        </Button>
                    </Center>

                    <Center h={"100%"}>
                        <Button colorScheme='red' mr='3' borderRadius={"12px"} >
                            <BsPencil style={{ marginRight: "5px" }} /> Viết review
                        </Button>
                        <Button colorScheme='red' mr='3' borderRadius={"12px"} variant='outline' onClick={onOpen}>
                            Đăng nhập
                        </Button>
                    </Center>

                    {/* <Button borderRadius={'50%'} mr="3">
                        <img src='/assets/img/bookmark2.svg' alt='' className={style.icon} />
                    </Button>
                    <Button borderRadius={'50%'}>
                        <img src='/assets/img/bell2.svg' alt='' className={style.icon} />
                    </Button> */}
                </Box>
                <Box display={["flex", "none"]}>
                    <Center>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<AiOutlineMenu />}
                                variant='outline'
                            />
                            <MenuList>
                                <MenuItem >
                                    {/* <Button colorScheme='red' mr='3' borderRadius={"12px"} variant='outline' w={"100%"}>
                                        Đăng nhập || Đăng kí
                                    </Button> */}
                                </MenuItem>
                                <MenuItem>
                                    Trang chủ
                                </MenuItem>
                                <MenuItem>
                                    Khám phá
                                </MenuItem>
                                <MenuItem >
                                    Khuyến mãi
                                </MenuItem>
                            </MenuList>
                        </Menu>

                    </Center>
                </Box>
            </Flex>
        </Container>
    )
}

export default Navbar