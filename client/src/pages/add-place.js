import React, { useState } from 'react'
import { Container, FormControl, FormLabel, Input, Select, Textarea, Switch, Flex, Stack, Checkbox, SimpleGrid, Button } from '@chakra-ui/react'
import style from './styles/place.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { scrollToTop } from '../untils/helper'
import UploadImage from './components/upload-image/UploadImage'
import { PLACE_ACTIONS } from '../redux/actions/imageAction'
// import { PLACE_ACTIONS } from '../redux/actions/placeAction'


const Place = () => {
    const { area, categories, utities } = useSelector(state => state)
    const dispatch = useDispatch()
    const { displayImage, menuImage } = useSelector(state => state.image)
    const [formInput, setFormInput] = useState({
        name: '',
        address: '',
        direct: '',
        intro: '',
        time: {
            min: '',
            max: ''
        },
        price: {
            min: '',
            max: ''
        },
        phone: '',
        facbook: '',
        instagram: '',
        website: ''

    })
    useEffect(() => {
        scrollToTop()

    }, [])

    return (
        <Container maxW={"996px"}>
            <div className={style.form_place}>
                <h3 className={style.text1}>Thêm địa điểm</h3>
                <p>Những quán yêu thích của bạn chưa có trên Tôi đi chơi? Chia sẻ với cộng đồng ngay!</p>
                <section>
                    <h3 className={style.text2}>Thông tin cơ bản</h3>
                    <div className={style.content}>
                        <FormControl mb={3} isRequired>
                            <FormLabel>Tên quán</FormLabel>
                            <Input type='text' placeholder='Nhập tên quán' />
                        </FormControl>
                        <FormControl mb={3} isRequired>
                            <FormLabel>Khu vực</FormLabel>
                            <Select placeholder='Chọn 1 quận'>
                                {
                                    area?.data.map(item => (
                                        <option value={item._id} key={item._id}>{item.name}</option>
                                    ))
                                }
                            </Select>
                        </FormControl>
                        <FormControl mb={3} isRequired>
                            <FormLabel>Địa chỉ</FormLabel>
                            <Input type='text' placeholder='Nhập địa chỉ cụ thể' />
                        </FormControl>
                        <FormControl mb={3} >
                            <FormLabel>Chỉ đường</FormLabel>
                            <Input type='text' placeholder='Nhập chỉ đường đến chi tiết nếu có thể' />
                        </FormControl>
                        <FormControl mb={3} >
                            <FormLabel>Giới thiệu</FormLabel>
                            <Textarea placeholder='Nhập giới thiệu về quán' />
                        </FormControl>
                        <FormControl>
                            <FormLabel >
                                Bạn là chủ quán
                            </FormLabel>
                            <Switch />
                        </FormControl>
                    </div>
                </section>
                <section >
                    <h3 className={style.text2}>Thông tin khác</h3>
                    <div className={style.content}>
                        <Flex justifyContent={"space-between"} direction={['column', 'row']} mb={3}>
                            <FormControl mb={3} display={['block', 'flex']} alignItems={'center'}>
                                <FormLabel w={'150px'}>Thời gian mở cửa</FormLabel>
                                <Input type='text' placeholder='10:00' w={['100%', '60%']} />
                            </FormControl>
                            <FormControl mb={3} display={['block', 'flex']} alignItems={'center'} >
                                <FormLabel>Đến</FormLabel>
                                <Input type='text' placeholder='22:00' w={['100%', '60%']} />
                            </FormControl>
                        </Flex>
                        <Flex justifyContent={"space-between"} direction={['column', 'row']} mb={3}>
                            <FormControl mb={3} display={['block', 'flex']} alignItems={'center'}>
                                <FormLabel w={'150px'}>Khoảng giá</FormLabel>
                                <Input type='text' placeholder='10:00' w={['100%', '60%']} />
                            </FormControl>
                            <FormControl mb={3} display={['block', 'flex']} alignItems={'center'} >
                                <FormLabel>Đến</FormLabel>
                                <Input type='text' placeholder='22:00' w={['100%', '60%']} />
                            </FormControl>
                        </Flex>
                        <FormControl mb={3}>
                            <FormLabel>Kiểu quán</FormLabel>
                            <SimpleGrid columns={[2, 4]} spacing={10}>
                                {
                                    categories?.data.map(item => (
                                        <Checkbox key={item._id}>
                                            {item.name}
                                        </Checkbox>
                                    ))
                                }
                            </SimpleGrid>
                        </FormControl>
                        <FormControl mb={3}>
                            <FormLabel>Tiện ích</FormLabel>
                            <SimpleGrid columns={[2, 3]} spacing={10}>
                                {
                                    utities?.data.map(item => (
                                        <Checkbox key={item._id}>
                                            {item.icon + " " + item.name}
                                        </Checkbox>
                                    ))
                                }
                            </SimpleGrid>
                        </FormControl>
                    </div>
                </section>
                <section>
                    <h3 className={style.text2}>Thông tin liên hệ</h3>
                    <div className={style.content}>
                        <FormControl mb={3} isRequired>
                            <FormLabel>Điện thoại</FormLabel>
                            <Input type='text' placeholder='Nhập số điện thoại' />
                        </FormControl>
                        <FormControl mb={3} isRequired>
                            <FormLabel>Facebook</FormLabel>
                            <Input type='text' placeholder='Nhập link facebook' />
                        </FormControl>
                        <FormControl mb={3} >
                            <FormLabel>Instagram</FormLabel>
                            <Input type='text' placeholder='Nhập link Instagram' />
                        </FormControl>
                        <FormControl mb={3} >
                            <FormLabel>Email</FormLabel>
                            <Input placeholder='Nhập địa chỉ email' />
                        </FormControl>
                        <FormControl mb={3} >
                            <FormLabel>Website</FormLabel>
                            <Input placeholder='Nhập link website' />
                        </FormControl>
                    </div>
                </section>
                <section>
                    <h3 className={style.text2}>Hình ảnh</h3>
                    <UploadImage
                        type={PLACE_ACTIONS.DISPLAY_IMAGE}
                        name={'display_image'}
                        images={displayImage}
                    />
                    <div>Chọn tối đa 20 ảnh</div>
                </section>
                <section>
                    <h3 className={style.text2}>Menu</h3>
                    <UploadImage
                        type={PLACE_ACTIONS.MENU_IMAGE}
                        name={'menu_image'}
                        images={menuImage}
                    />
                    <div>Chọn tối đa 20 ảnh</div>
                </section>
                <section>
                    <Button colorScheme='red' size='lg' w={'100%'} mt={5}>
                        + Thêm địa điểm
                    </Button>
                </section>
            </div>
        </Container>
    )
}

export default Place