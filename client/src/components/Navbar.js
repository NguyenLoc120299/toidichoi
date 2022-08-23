import { Avatar, Box, Button, Center, Container, Flex, Image, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import style from './navbar.module.css'
import { FaSlackHash, FaPercentage } from 'react-icons/fa'
import { BsPencil } from 'react-icons/bs'
import { IconButton } from '@chakra-ui/react'
import {useDisclosure } from '@chakra-ui/react';
import LoginModal from './LoginModal'
import { useSelector, useDispatch } from 'react-redux'
import { FaUserEdit, FaRegEnvelope, FaPowerOff } from 'react-icons/fa'
import { logout } from '../redux/actions/authAction'
import { ALERT_ACTION } from '../redux/actions/alertAction'
import DrawerNavbar from './DrawerNavbar'
export const logo = (
    <>
        <img src='/assets/img/logo.png' style={{ maxWidth: '15%' }} alt='' />
        <Center>
            <Link to="/home" className='custom_text'>
                <span className={style.logo}>Tôi đi reviews</span>
            </Link>
        </Center>
    </>

)
const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const auth = useSelector(state => state.auth)
    const history = useHistory()
    const dispatch = useDispatch()
    return (
        <Container maxW={"100%"} className={style.nav}>
            <LoginModal />
            <Flex justifyContent="space-between" >
                <Box p='2' display={'flex'}>
                    {logo}
                </Box>
                <Box display={["none", "flex"]}>
                    <Center h={"100%"}>
                        <Flex justifyContent={"space-between"} alignItems="center">
                            <Link to="/explore" style={{ marginRight: "1.5rem" }} className={style.links}>
                                <span> <FaSlackHash style={{ marginRight: '5px' }} /> Khám phá</span>
                            </Link>
                            <Link to="/promotion" className={style.links}>
                                <span> <FaPercentage style={{ marginRight: '5px' }} />Khuyến mãi</span>
                            </Link>
                        </Flex>
                    </Center>
                </Box>
                <Box display={["none", "flex"]}>
                    {/* <Center>
                        <Button
                            aria-label="Toggle Color Mode"
                            onClick={toggleColorMode}
                            _focus={{ boxShadow: 'none' }}
                            w="fit-content"
                            mr='3'
                        >
                            {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}
                        </Button>
                    </Center> */}

                    <Center h={"100%"}>
                        <Button className='custom_btn' mr='3' borderRadius={"12px"} onClick={() => history.push('/add-review')}>
                            <BsPencil style={{ marginRight: "5px" }}

                            /> Viết review
                        </Button>
                        {
                            !auth.token &&
                            <Button className='custom_btn' mr='3' borderRadius={"12px"} onClick={() => dispatch({
                                type: ALERT_ACTION.ALERT,
                                payload: {
                                    modal: true
                                }
                            })}>
                                Đăng nhập
                            </Button>
                        }

                    </Center>
                    {auth.token &&
                        <>
                            <Center>
                                <Button borderRadius={'50%'} mr="3">
                                    <Image src='/assets/img/bookmark2.svg' alt='' className={style.icon} />
                                </Button>
                                <Button borderRadius={'50%'} mr="3">
                                    <Image src='/assets/img/bell2.svg' alt='' className={style.icon} />
                                </Button>
                            </Center>

                            <Center>
                                <Menu>
                                    <MenuButton
                                        as={Button}
                                        rounded={'full'}
                                        variant={'link'}
                                        cursor={'pointer'}
                                        minW={0}>
                                        <Avatar
                                            size={'sm'}
                                            objectFit={"cover"}
                                            src={auth.user.avatar ? auth.user.avatar :
                                                'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                            }
                                        />
                                    </MenuButton>
                                    <MenuList>
                                        <Link to="/profile" >
                                            <MenuItem  >

                                                <Flex justifyContent={'space-between'} alignItems={"center"} >
                                                    <Avatar
                                                        size={'sm'}
                                                        objectFit={"cover"}
                                                        mr={3}
                                                        src={auth.user.avatar ? auth.user.avatar :
                                                            'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                                                        }
                                                    />
                                                    <Text fontSize='md' fontWeight={'bold'}>{auth.user.username}</Text>
                                                </Flex>

                                            </MenuItem>
                                        </Link>
                                        <MenuDivider />
                                        <MenuItem>
                                            <Link to='/profile/setting'>
                                                <Center>
                                                    <FaUserEdit /><Text fontWeight={'bold'} ml={2}> Chỉnh sửa trang cá nhân</Text>
                                                </Center>
                                            </Link>
                                        </MenuItem>
                                        <MenuItem>
                                            <Center>
                                                <FaRegEnvelope />
                                                <Text fontWeight={"bold"} ml={2}> Liên hệ góp ý</Text>
                                            </Center>
                                        </MenuItem>

                                        <MenuItem>
                                            <Center>
                                                <FaPowerOff />
                                                <Text fontWeight={'bold'} ml={2} onClick={() => dispatch(logout())}>Đăng xuất</Text>
                                            </Center>
                                        </MenuItem>
                                    </MenuList>
                                </Menu>
                            </Center>
                        </>
                    }
                </Box>
                <Box display={["flex", "none"]}>
                    <Center>
                        <Menu
                        >
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                border={'none'}
                                variant='outline'
                                onClick={onOpen}
                                _focus={{
                                    border: "unset",
                                    background: "transparent",
                                    boxShadow: 'unset'
                                }}
                                _active={{
                                    background: "transparent"
                                }}
                                _hover={{
                                    background: "unset"
                                }}

                            >
                                <svg viewBox="0 0 120 100" width="20" height="18"><rect width="120" height="18" rx="14"></rect><rect y="40" x="30" width="90" height="20" rx="14"></rect><rect y="80" width="120" height="20" rx="14"></rect></svg>
                            </MenuButton>
                        </Menu>

                    </Center>
                </Box>
            </Flex>
            <DrawerNavbar
                isOpen={isOpen}
                onClose={onClose}
            />
        </Container>
    )
}

export default Navbar