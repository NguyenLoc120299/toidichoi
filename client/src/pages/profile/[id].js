import { BsPencil, BsPatchPlusFill } from 'react-icons/bs'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useToast } from '@chakra-ui/react'
import { ALERT_ACTION } from '../../redux/actions/alertAction'
const Setting = () => {
    const toast = useToast()
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const { user } = auth
    const [isFlag, setIsFlag] = useState({
        isUserName: false,
        isPassword: false,
    })
    const msg = (text = "Chức năng sẽ được update sau") => {
        toast({
            title: text,
            status: 'warning',
            duration: 3000,
            isClosable: true,
            position: 'top-right',
        })
    }

    const toggleFormEdit = (flag) => {
        const { name } = flag
        setIsFlag({
            ...isFlag,
            [name]: !isFlag[name]
        })
    }
    const renderBtn = (type) => {
        return (
            <div className={style.form}>
                <div className={style.input}>
                    <input placeholder='Tên hiển thị' />
                </div>
                <div className={style.button}>
                    <button className={style.submit}>Cập nhật</button>
                    <button onClick={() => toggleFormEdit({ name: type })}>Hủy</button>
                </div>
            </div>
        )
    }
    return (
        <div className={style.container}>
            <div className={style.setting_left}>
                <div className={style.setting_toolbar}>
                    <div className={style.header_toolbar}>
                        <div className={style.setting_avatar}>
                            <Link to={'/profile'}>
                                <img src={user?.avatar} alt='#' />
                            </Link>
                        </div>
                        <div className={style.username}>
                            <Link to={'/profile'}>
                                <h3>{user?.username}</h3>
                            </Link>
                            <span>User</span>
                        </div>


                    </div>
                    <hr />
                    <div className={style.nav}>
                        <div className={`${style.navItem} ${style.active}`}>
                            <Link to="/profile/setting">
                                <i className="fas fa-user-edit"></i> Tổng quan
                            </Link>
                        </div>
                        <div className={style.navItem}>
                            <Link to="/profile/setting">
                                <i className="fas fa-coins"></i> Thông báo
                            </Link>
                        </div>

                    </div>
                    <hr />
                    <div className={style.navItem}>
                        <Link to="/profile/setting">
                            <i className="fas fa-power-off"></i> Đăng xuất
                        </Link>
                    </div>
                </div>
            </div>
            <div className={style.setting_right}>
                <div className={style.setting_content}>
                    <div className={style.setting_contentItem}>
                        <div>
                            <div className={style.top}>
                                <div className={style.title}>
                                    <h2><i className="far fa-user"></i> Lộc Nguyễn</h2>
                                </div>
                                {
                                    !isFlag.isUserName && <div className={style.action} onClick={() => toggleFormEdit({ name: "isUserName" })}>
                                        <BsPencil />
                                    </div>
                                }
                            </div>
                            {
                                isFlag.isUserName &&
                                renderBtn('isUserName')
                            }


                        </div>
                    </div>
                    <div className={style.setting_contentItem}>
                        <div>
                            <div className={style.top}>
                                <div className={style.title}>
                                    <h2><i className="fas fa-lock"></i>Mật khẩu</h2>
                                </div>
                                <div className={style.action} onClick={() => msg()}>
                                    <BsPencil />
                                </div>


                            </div>
                            <div className={style.body}>
                                <span className={style.created}>
                                    <i className="fas fa-plus-circle"></i> Thêm mật khẩu để đăng nhập bằng email hoặc tên người dùng
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={style.setting_contentItem}>
                        <div>
                            <div className={style.top}>
                                <div className={style.title}>
                                    <h2><i class="far fa-envelope"></i> Email</h2>
                                </div>
                                <div className={style.action} onClick={() => msg('Không thể cập nhật email của bạn')}>
                                    <BsPencil />
                                </div>
                            </div>
                            <div className={style.body}>
                                <span>{user?.email}</span>
                            </div>

                        </div>
                    </div>
                    <div className={style.setting_contentItem}>
                        <div>
                            <div className={style.top}>
                                <div className={style.title}>
                                    <h2><i className="fa fa-mobile-alt"></i> Điện thoại</h2>
                                </div>
                                <div className={style.action} onClick={() => msg()}>
                                    <BsPencil />
                                </div>
                            </div>
                            <div className={style.body}>
                                {
                                    user?.phone ? <span>{user?.phone}</span> :
                                        <span className={style.created}>
                                            <i className="fas fa-plus-circle"></i> Thêm số điện thoại của bạn
                                        </span>
                                }
                            </div>
                        </div>
                    </div>
                    <div className={style.setting_contentItem}>
                        <div>
                            <div className={style.top}>
                                <div className={style.title}>
                                    <h2><i className="fa fa-globe"></i>Mạng xã hội</h2>
                                </div>
                                <div className={style.action} onClick={() => msg()}>
                                    <BsPencil />
                                </div>
                            </div>
                            <div className={style.body}>
                                {
                                    user?.linkFacebook ? <span>{user?.linkFacebook}</span> :
                                        <span className={style.created}>
                                            <i className="fas fa-plus-circle"></i> Thêm link Facebook của bạn
                                        </span>
                                }
                                {
                                    user?.linkInstagram ? <span>{user?.linkInstagram}</span> :
                                        <span className={style.created}>
                                            <i className="fas fa-plus-circle"></i> Thêm link Instagram của bạn
                                        </span>
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div >
    )
}

export default Setting