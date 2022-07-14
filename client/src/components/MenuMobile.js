import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ALERT_ACTION } from '../redux/actions/alertAction'

const MenuMobile = () => {
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    return (
        <div className='nav_mobile'>
            <div className='nav-content'>
                <Link className="Navbar_item" to="/"><i className="fas fa-home"></i><span>Trang chủ</span></Link>
                <Link className="Navbar_item" to="/explore"><i className="fas fa-fire"></i><span>Khám phá</span></Link>
                <Link className="Navbar_item" to="/promo"><i className="fas fa-percent"></i><span>khuyến mãi</span></Link>
                <Link className="Navbar_item" to="/save"><i className="fas fa-bookmark"></i><span>Đã lưu</span></Link>
                {
                    user ? <Link className="Navbar_item" to={`profile`}><i className="fas fa-user"></i><span>Tài khoản</span></Link>
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