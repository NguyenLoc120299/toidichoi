import { Avatar, Box, Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Text, useDisclosure } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { ALERT_ACTION } from '../redux/actions/alertAction'
import useClickOutSide from '../customHooks/clickOutSide';
const MenuMobile = () => {
    const user = useSelector(state => state.auth.user)
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
    return (

        <div className='nav_mobile'>
            <div className='nav-content'>
                <Link className={`Navbar_item ${isActive('/')}`} to="/"><i className="fas fa-home"
                onClick={onClose}
                ></i><span>Trang chủ</span></Link>
                <Link className={`Navbar_item ${isActive('/explore')}`} to="/explore"
                    onClick={onClose}
                ><i className="fas fa-fire"></i><span>Khám phá</span>
                </Link>
                <Link className={`Navbar_item ${isActive('/promo')}`} to="/promo"><i className="fas fa-percent"
                    onClick={onClose}
                ></i><span>khuyến mãi</span></Link>
                <Link className={`Navbar_item ${isActive('')}`} to="#"><i className="fas fa-bell" onClick={onOpen}></i><span>Thông báo</span>
                    {
                        notifyNotRead.length > 0 &&
                        <div className='notification'>
                            {notifyNotRead.length}
                        </div>
                    }
                </Link>
                {
                    user ? <Link className={`Navbar_item ${isActive('/profile')}`} to={`/profile`}><i className="fas fa-user"
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
                    <DrawerContent >
                        <DrawerHeader borderBottomWidth='1px'>
                            <Text fontWeight={'bold'}>Thông báo</Text>
                        </DrawerHeader>
                        <DrawerBody>
                            {
                                data && data.map(item=>(
                                    <Box mb={6} background={item.isRead ? "#cccc" : "#fff"}>
                                        <Flex gap={5}>
                                           <Avatar size={'sm'} name={item?.user.username} src={item?.user.avatar} />
                                           <Box>
                                            <Text>
                                               <span 
                                                style={{fontWeight:'bold'}}
                                               >{item?.user.username}</span> { item.text }
                                            </Text>
                                           </Box>
                                        </Flex>
                                    </Box>
                                ))
                            }
                        </DrawerBody>
                    </DrawerContent>
                </Drawer>
            </Box>
        </div>
    )
}

export default MenuMobile