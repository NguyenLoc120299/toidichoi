import { stringLength } from '@firebase/util'
import React from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.css'
const Setting = () => {
    return (
        <div className={style.container}>
            <div className={style.setting_left}>
                <div className={style.setting_toolbar}>
                    <div className={style.header_toolbar}>
                        <div className={style.setting_avatar}>
                            <Link to="#">
                                <img src='#' alt='#' />
                            </Link>
                        </div>
                        <div className={style.username}>
                            <Link to="#">
                                <h3>aaa</h3>
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
                                <div className={style.action}>
                                    <i className="far fa-pencil"></i>
                                </div>


                            </div>

                        </div>
                    </div>
                    <div className={style.setting_contentItem}>
                        <div>
                            <div className={style.top}>
                                <div className={style.title}>
                                    <h2><i className="fas fa-lock"></i>Mật khẩu</h2>
                                </div>
                                <div className={style.action}>
                                    <i className="far fa-pencil"></i>
                                </div>


                            </div>
                            <div className={style.body}>
                                <span>Thêm mật khẩu để đăng nhập bằng email hoặc tên người dùng</span>
                            </div>
                        </div>
                    </div>
                    <div className={style.setting_contentItem}>
                        <div>
                            <div className={style.top}>
                                <div className={style.title}>
                                    <h2><i class="far fa-envelope"></i> Email</h2>
                                </div>
                                <div className={style.action}>
                                    <i className="fas fa-pen"></i>
                                </div>


                            </div>

                        </div>
                    </div>
                    <div className={style.setting_contentItem}>
                        <div>
                            <div className={style.top}>
                                <div className={style.title}>
                                    <h2><i className="fa fa-mobile-alt"></i> Điện thoại</h2>
                                </div>
                                <div className={style.action}>
                                    <i className="fas fa-pen"></i>
                                </div>


                            </div>

                        </div>
                    </div>
                    <div className={style.setting_contentItem}>
                        <div>
                            <div className={style.top}>
                                <div className={style.title}>
                                    <h2><i className="fa fa-globe"></i>Mạng xã hội</h2>
                                </div>
                                <div className={style.action}>
                                    <i className="fa fa-pen"></i>
                                </div>


                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div >
    )
}

export default Setting