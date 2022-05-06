import React from 'react'
import { useHistory } from 'react-router-dom'
import style from '../pages/components/categories/categories.module.css'
const CardItem = ({item}) => {
    const history= useHistory()
    return (
        <div className={style.card_trending} onClick={()=>history.push(`/place/${item._id}`)} >
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