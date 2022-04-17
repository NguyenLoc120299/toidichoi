import React from 'react'
import style from '../pages/components/categories/categories.module.css'
const CardItem = () => {
    return (
        <div className={style.card_trending}>
            <div className={style.card_image}>
                <div className={style.cardImage_wrappeer}>
                    <div className={style.load_image}>
                        <img src="https://toidicafe.vn/static/images/place/skyline-hanoi/skyline-hanoi-avatar-1648268319055.png?w=960" srcSet="https://toidicafe.vn/static/images/place/skyline-hanoi/skyline-hanoi-avatar-1648268319055.png?w=960 1x, https://toidicafe.vn/static/images/place/skyline-hanoi/skyline-hanoi-avatar-1648268319055.png?w=640 2x" alt="Skyline Hanoi" />
                    </div>
                </div>
            </div>
            <div className={style.card_body}>
                <h3 className={style.card_title}>Skyline Hanoi</h3>
                <div className={style.card_text}>
                    38 Gia Ngư, Hoàn Kiếm
                </div>
            </div>
        </div>
    )
}

export default CardItem