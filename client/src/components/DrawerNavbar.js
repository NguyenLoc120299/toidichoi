import { Avatar, Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Text } from '@chakra-ui/react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ALERT_ACTION } from '../redux/actions/alertAction'
import { logout } from '../redux/actions/authAction'

const DrawerNavbar = ({ onClose, isOpen }) => {

    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const MenuItem = ({ children }) => {
        return (
            <Box
                display={'flex'}
                justifyContent='flex-start'
                cursor={'pointer'}
                padding='10px 20px'
                color={'#000'}
                fontSize="16px"
                fontWeight={500}
            >

                {children}
            </Box>
        )
    }
    return (
        <Drawer onClose={onClose} isOpen={isOpen} size={'xs'} placement={"right"} >
            <DrawerOverlay />
            <DrawerContent maxW={'280px'} overflow="scroll">


                {
                    user ?
                        <Box
                            p="20px 20px 16px"
                        >
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="flex-start"
                                padding="20px"
                                margin="-24px"
                                background="linear-gradient(270deg,#ef5d7c,#e03)"
                                borderBottomRightRadius="60px"
                            >
                                <Box
                                    width="60px"
                                    height="60px"
                                    padding="2px"
                                    marginRight="16px"
                                    background="#fff"
                                    borderRadius="50%"
                                    overflow="hidden"
                                >
                                    <Avatar name={user.username} src={user.avatar} w="100%" h={"100%"} />
                                </Box>
                                <Box>
                                    <Text
                                        fontSize="18px"
                                        fontWeight="700"
                                        color="#fff"
                                        marginBottom="4px"
                                        textTransform={'capitalize'}
                                    >
                                        {user.username}
                                    </Text>
                                </Box>
                            </Box>

                        </Box>
                        :
                        <DrawerHeader>
                            <Box
                                p="20px 20px 16px"
                            >
                                <Button colorScheme='red' mr='3'
                                    _focus={{
                                        border: "unset",

                                        boxShadow: 'unset'
                                    }}

                                    onClick={() => dispatch({
                                        type: ALERT_ACTION.ALERT,
                                        payload: {
                                            modal: true
                                        }
                                    })}
                                >Đăng nhập đăng kí</Button>

                            </Box>
                        </DrawerHeader>
                }
                {
                    user && <>
                        <MenuItem>
                            <Link to="#">
                                <i className="fas fa-user-edit" style={{ paddingRight: "12px" }}></i> {" "}
                                <span>Chỉnh sửa hồ sơ</span>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="#">
                                <i className="fas fa-bookmark" style={{ paddingRight: "12px" }}></i> {" "}
                                <span>Danh sách đã lưu</span>
                            </Link>
                        </MenuItem>
                    </>
                }

                <Text
                    fontSize="14px"
                    padding="6px 20px"
                    margin="10px 0 4px"
                    background="#f0f2f5"
                    color="rgba(0,0,0,.85)"
                    fontWeight="500"
                >
                    Tôi Đi Reviews
                </Text>
                <MenuItem>
                    <Link to="#">
                        <i className="fas fa-home" style={{ paddingRight: "12px" }}></i> {" "}
                        <span>Trang chủ</span>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="#">
                        <i className="fas fa-fire" style={{ paddingRight: "12px" }}></i> {" "}
                        <span>Khám phá</span>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="#">
                        <i className="fas fa-percent" style={{ paddingRight: "12px" }}></i> {" "}
                        <span>Khuyến mãi</span>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="#">
                        <i className="fas fa-map-marker-alt" style={{ paddingRight: "12px" }}></i> {" "}
                        <span>Địa điểm mới</span>
                    </Link>
                </MenuItem>
                <Text
                    fontSize="14px"
                    padding="6px 20px"
                    margin="10px 0 4px"
                    background="#f0f2f5"
                    color="rgba(0,0,0,.85)"
                    fontWeight="500"
                >
                    Thông tin
                </Text>
                <MenuItem>
                    <Link to="#">
                        <i className="fas fa-info-circle" style={{ paddingRight: "12px" }}></i> {" "}
                        <span>Giới thiệu</span>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="#">
                        <i class="fas fa-shield-alt" style={{ paddingRight: "12px" }}></i> {" "}
                        <span>Điều khoản và chính sách</span>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="#">
                        <i className="fas fa-envelope" style={{ paddingRight: "12px" }}></i> {" "}
                        <span>Liên hệ góp ý</span>
                    </Link>
                </MenuItem>
                <Text
                    fontSize="14px"
                    padding="6px 20px"
                    margin="10px 0 4px"
                    background="#f0f2f5"
                    color="rgba(0,0,0,.85)"
                    fontWeight="500"
                >
                    Theo dõi chúng tôi
                </Text>
                <MenuItem>
                    <Link to="#" className='facebook_icon'>
                        <i className="fab fa-facebook" style={{ paddingRight: "12px" }}></i> {" "}
                        <span>Facebook</span>
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="#" className='instagram_icon'>
                        <i className="fab fa-instagram" style={{ paddingRight: "12px" }}></i> {" "}
                        <span>Instagram</span>
                    </Link>
                </MenuItem>
                <MenuItem >
                    <Link to="#" className='tiktok_icon'>
                        <i className="fab fa-tiktok" style={{ paddingRight: "12px" }}></i> {" "}
                        <span >Tiktok</span>
                    </Link>
                </MenuItem>
                {
                    user && <MenuItem >
                        <Button
                            _focus={{
                                boxShadow: 'unset'
                            }}
                            display="block"
                            width="100%"
                            fontSize="16px"
                            fontWeight="400"
                            padding="4px"
                            color="#e03"
                            background="transparent"
                            border="1px solid #e03"
                            borderRadius="4px"
                            onClick={() => dispatch(logout())}
                        >
                            Đăng xuất
                        </Button>
                    </MenuItem>
                }

            </DrawerContent>
        </Drawer >
    )
}

export default DrawerNavbar