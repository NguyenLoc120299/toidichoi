import { Container, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import styled from './styles/promotion.module.css'
const Promotion = () => {
    return (
        <div className={styled.promotion}>
            <Container maxW={"1200px"}>
                <div className={styled.headerPromo}>
                    <div className={styled.headerContent}>
                        <h1>Cập nhật khuyến mãi hiện hành</h1>
                        <p>Bạn đang tìm kiếm một điểm để vui chơi, ăn uống và sống ảo?</p>
                        <p>Hãy tiết kiệm hơn với các chương trình khuyến mãi ở dưới đây.</p>
                    </div>
                    <div className={styled.proImg}>
                        <img src='https://doodleipsum.com/500x500/outline?i=efb2399e32de73e7933220b64879154a' />
                    </div>
                </div>
                <div className={styled.bodyPro}>
                    <SimpleGrid columns={3} spacing={10}>
                        <div className={styled.promoCard}>
                            <div>
                                <div className={styled.cardImg}>
                                    <div className={styled.cardImgWrapper}>
                                        <img src="	https://phuclong.com.vn/upload/files/EC%20EC%20BUT%202%20GET%201_900%20x%20900.jpg" />
                                    </div>
                                </div>
                                <div className={styled.cardBody}>
                                    <div className={styled.cardSepect}>
                                        CHƯƠNG TRÌNH "MUA 2 TẶNG 1"
                                    </div>
                                    <div className={styled.cardTitle}>PHÚC LONG </div>
                                    <div className={styled.cardText}>	Nguyễn Thị Minh Khai</div>
                                </div>
                            </div>
                        </div>
                    </SimpleGrid>

                </div>
            </Container>
        </div>
    )
}

export default Promotion