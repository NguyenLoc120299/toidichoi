import { Box, Container, useToast } from '@chakra-ui/react'
import React from 'react'
import styled from './styles/contact.module.css'
const Contact = () => {
    const toast = useToast()
    const onSubmit = () => toast({
        title: "Gửi thành công",
        status: 'success',
        duration: 3000,
        position: "top-right"
    })
    return (
        <div className={styled.contact}>
            <Container maxW={'1200px'} >
                <div className={styled.contact_wrapper}>
                    <h1>Liên hệ với chúng tôi</h1>
                    <h2>
                        ToiDiReview cám ơn mọi ý kiến đóng góp, chia sẻ về mọi vấn đề liên quan.
                        <br />
                        Hãy liên hê với chung tôi ua email:
                        <a href="mailto:toidireview@gmail.com"><b> toidireview@gmail.com</b></a>
                        <br />
                        Hoặc bạn có thể gửi thông tin qua form sau
                    </h2>
                    <div className={styled.contact_form}>
                        <div className={styled.contact_content}>
                            <div className={styled.contact_input}>
                                <span>Họ và tên</span>
                                <input />
                            </div>
                            <div className={styled.contact_input}>
                                <span>Email của bạn</span>
                                <input />
                            </div>
                            <div className={styled.contact_input}>
                                <span>Lời nhắn của bạn</span>
                                <textarea rows={5} />
                            </div>
                            <div className={styled.contactImg}>
                                <button className={`custom_btn ${styled.btn_contact}`} onClick={onSubmit}>Gửi</button>
                            </div>
                        </div>
                        <div className={styled.contactImg}>
                            <img src='https://doodleipsum.com/500x500/outline?i=05efb0b9619f08e9688e051706e5ea48' />
                        </div>

                    </div>

                </div>
            </Container>
        </div>
    )
}

export default Contact