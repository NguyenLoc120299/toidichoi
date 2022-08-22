import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { ALERT_ACTION } from '../redux/actions/alertAction'

const MenuMobile = () => {
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const { pathname } = useLocation()
    const isActive = (path) => {
        if (pathname === path) return 'active'
        //if (path === 'bell') return 'active'
        return ''
    }

    return (
        <div className='nav_mobile'>
            <div className='nav-content'>
                <Link className={`Navbar_item ${isActive('/')}`} to="/"><i className="fas fa-home"></i><span>Trang chủ</span></Link>
                <Link className={`Navbar_item ${isActive('/explore')}`} to="/explore"><i className="fas fa-fire"></i><span>Khám phá</span>
                </Link>
                <Link className={`Navbar_item ${isActive('/promo')}`} to="/promo"><i className="fas fa-percent"></i><span>khuyến mãi</span></Link>
                <Link className={`Navbar_item ${isActive('')}`} to="#"><i className="fas fa-bell"></i><span>Thông báo</span>
                    <div className='notification'>
                        1
                    </div>
                </Link>
                {
                    user ? <Link className={`Navbar_item ${isActive('/profile')}`} to={`/profile`}><i className="fas fa-user"></i><span>Tài khoản</span></Link>
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
        </div>
    )
}

export default MenuMobile