import { Avatar, Box, Center, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Text, useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { ALERT_ACTION } from '../redux/actions/alertAction'
import useClickOutSide from '../customHooks/clickOutSide';
import { formatTime } from '../pages/components/helper/moment'
import { isReadNotify } from '../redux/actions/notifyAction'
import PwaInstaller from '../untils/PwaInstaller'
const MenuMobile = () => {
    const auth = useSelector(state => state.auth)
    const { user } = auth
    const navRef = useRef()
    const dispatch = useDispatch()
    const { data } = useSelector(state => state.notify)
    const notifyNotRead = data.filter(item => item.isRead === false)
    const { pathname } = useLocation()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const isActive = (path) => {
        if (pathname === path) return 'active'
        //if (path === 'bell') return 'active'
        return ''
    }
    useClickOutSide(onClose, navRef)
    const handleIsRead = (msg) => {
        dispatch(isReadNotify({ msg, auth }))
    }
    const handleIsreadAl = () => {
        data.forEach(element => {
            if (!element.isRead) {
                handleIsRead(element)
            }
        });
    }
    return (

        <div className='nav_mobile' style={{
            zIndex: 999
        }}>
            <div className='nav-content'>
                {/* <PwaInstaller /> */}
                <Link className={`Navbar_item ${isActive('/')}`} to="/"><i className="fas fa-home"
                    onClick={onClose}
                ></i><span>Trang chủ</span></Link>
                <Link className={`Navbar_item ${isActive('/explore')}`} to="/explore"
                    onClick={onClose}
                ><i className="fas fa-fire"></i><span>Khám phá</span>
                </Link>
                <Link className={`Navbar_item ${isActive('/promotion')}`} to="/promotion"><i className="fas fa-percent"
                    onClick={onClose}
                ></i><span>khuyến mãi</span></Link>
                {/* <Link className={`Navbar_item ${isActive('/promo')}`} to="/promo"><i className="far fa-newspaper"
                    onClick={onClose}
                ></i><span>Blogs</span></Link> */}
                <Link className={`Navbar_item ${isActive('')}`} to="#"><i className="fas fa-bell" onClick={onOpen}></i><span>Thông báo</span>
                    {
                        notifyNotRead.length > 0 &&
                        <div className='notification'>
                            {notifyNotRead.length}
                        </div>
                    }
                </Link>
                {
                    user ? <Link className={`Navbar_item ${isActive(`/profile/${user._id}`)}`} to={`/profile/${user._id}`}><i className="fas fa-user"
                        onClick={onClose}
                    ></i><span>Tài khoản</span></Link>
                        :
                        <Link className="Navbar_item" to={"#"}
                            onClick={() => dispatch({
                                type: ALERT_ACTION.ALERT,
                                payload: {
                                    modal: true
                                }
                            })}
                        ><i className="fas fa-user"></i><span>Tài khoản</span></Link>
                }


            </div>
            <Box >
                <Drawer placement={'right'} onClose={onClose} isOpen={isOpen} size={'full'} >
                    <DrawerOverlay />
                    <DrawerContent  >
                        <DrawerHeader borderBottomWidth='1px'>
                            <Flex justifyContent={'space-between'}>
                                <Text fontSize={'16px'}>Thông báo</Text>
                                <Text
                                    fontSize={'16px'}
                                    cursor={"pointer"}
                                    onClick={onClose}
                                >Thoát</Text>
                            </Flex>
                        </DrawerHeader>
                        <DrawerBody overflow={'scroll'} p={0}>
                            <Flex alignItems={'center'} gap={2} cursor={"pointer"} p={5}>
                                <i className="fas fa-check-double" style={{ fontSize: '16px' }} />
                                <span style={{ fontSize: '16px', cursor: 'pointer' }} onClick={handleIsreadAl}>Đánh dấu đã đọc</span>
                            </Flex>
                            {
                                data && data.length > 0 ? data.map(item => (
                                    <Link to={item.url} onClick={onClose} key={item._id}>
                                        <Box p={6} background={item.isRead ? "#ffff" : "#dddd"} onClick={() => handleIsRead(item)}>
                                            <Flex gap={5}>
                                                <Avatar size={'md'} name={item?.user.username} src={item?.user.avatar} />
                                                <Box>
                                                    <Text>
                                                        <span
                                                            style={{ fontWeight: 'bold' }}
                                                        >{item?.user.username}</span> {item.text}
                                                    </Text>

                                                    <Text>
                                                        {formatTime(item.createdAt)}
                                                    </Text>
                                                </Box>
                                            </Flex>
                                        </Box>
                                    </Link>
                                ))
                                    :
                                    <Center fontSize={'md'} fontWeight={500}>Không có thông báo</Center>
                            }
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
        </div>
    )
}

export default MenuMobile