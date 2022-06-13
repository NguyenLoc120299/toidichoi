import { Avatar, Box, Button, Center, Container, Flex, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import style from './navbar.module.css'
import { FaSlackHash, FaPercentage } from 'react-icons/fa'
import { BsPencil } from 'react-icons/bs'
import { AiOutlineMenu } from 'react-icons/ai'
import { IconButton } from '@chakra-ui/react'
import { useColorMode, useDisclosure } from '@chakra-ui/react';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';
import LoginModal from './LoginModal'
import { useSelector, useDispatch } from 'react-redux'
import { FaUserEdit, FaRegEnvelope, FaPowerOff } from 'react-icons/fa'
import { logout } from '../redux/actions/authAction'
import { ALERT_ACTION } from '../redux/actions/alertAction'
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
    const { auth } = useSelector(state => state)
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
                        <Button colorScheme='red' mr='3' borderRadius={"12px"} onClick={() => history.push('/add-review')}>
                            <BsPencil style={{ marginRight: "5px" }} /> Viết review
                        </Button>
                        {
                            !auth.token &&
                            <Button colorScheme='red' mr='3' borderRadius={"12px"} variant='outline' onClick={() => dispatch({
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
                                    <img src='/assets/img/bookmark2.svg' alt='' className={style.icon} />
                                </Button>
                                <Button borderRadius={'50%'} mr="3">
                                    <img src='/assets/img/bell2.svg' alt='' className={style.icon} />
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
                                        <MenuItem  >
                                            <Link to="/profile" >
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
                                            </Link>
                                        </MenuItem>
                                        <MenuDivider />
                                        <MenuItem>
                                            <Center>
                                                <FaUserEdit /><Text fontWeight={'bold'} ml={2}> Chỉnh sửa trang cá nhân</Text>
                                            </Center>
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
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                aria-label='Options'
                                icon={<AiOutlineMenu />}
                                variant='outline'
                            />
                            <MenuList>
                                <MenuItem >
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