import React from 'react'
import style from '../pages/components/categories/categories.module.css'
const CardItem = ({item}) => {
    return (
        <div className={style.card_trending}>
            <div className={style.card_image}>
                <div className={style.cardImage_wrappeer}>
                    <div className={style.load_image}>
                        <img src={item?.images[0]} alt={item.name} />
                    </div>
                </div>
            </div>
            <div className={style.card_body}>
                <h3 className={style.card_title}>{item.name}</h3>
                <div className={style.card_text}>
                  {item.address}
                </div>
            </div>
        </div>
    )
}

export default CardItem