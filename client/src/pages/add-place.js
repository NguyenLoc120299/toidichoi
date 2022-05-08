import React, { useState } from 'react'
import { Container, FormControl, FormLabel, Input, Select, Textarea, Switch, Flex, Stack, Checkbox, SimpleGrid, Button, FormErrorMessage, Box } from '@chakra-ui/react'
import style from './styles/place.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { scrollToTop } from '../untils/helper'
import UploadImage from './components/upload-image/UploadImage'
import { PLACE_ACTIONS } from '../redux/actions/imageAction'
import { isDisableSubmit } from './components/helper/ValidPlace'
import { addPlace } from '../redux/actions/placeAction'
// import { PLACE_ACTIONS } from '../redux/actions/placeAction'


const Place = () => {
    const { area, categories, utities, auth, alert } = useSelector(state => state)
    const dispatch = useDispatch()
    const { displayImage, menuImage } = useSelector(state => state.image)
    const [err, setErr] = useState({})
    const [formInput, setFormInput] = useState({
        name: '',
        area: '',
        address: '',
        direct: '',
        intro: '',
        time_min: '',
        time_max: "",
        price_min: '',
        price_max: '',
        phone: '',
        facebook: '',
        email: '',
        instagram: '',
        website: '',
        typePlace: [],
        utities: []

    })
    const handleOnchangeFormInput = (e) => {
        e.preventDefault();
        const { name, value } = e.target
        setFormInput({ ...formInput, [name]: value })
    }

    const handleOnchangeCheckBoxType = (e) => {
        e.preventDefault()
        setFormInput({ ...formInput, typePlace: [...formInput.typePlace, e.target.value] })
    }
    const handleOnchangeCheckBoxUtities = (e) => {
        e.preventDefault()
        setFormInput({ ...formInput, utities: [...formInput.utities, e.target.value] })
    }
    useEffect(() => {
        scrollToTop()
    }, [])
    const onSubmit = () => {
        const check = isDisableSubmit(formInput)
        if (check.errNumber > 0) return setErr(check.msg)
        dispatch(addPlace(formInput, displayImage, auth))
    }
    return (
        <Container maxW={"996px"}>
            <div className={style.form_place}>
                <h3 className={style.text1}>Thêm địa điểm</h3>
                <p>Những quán yêu thích của bạn chưa có trên Tôi đi chơi? Chia sẻ với cộng đồng ngay!</p>
                <section>
                    <h3 className={style.text2}>Thông tin cơ bản</h3>
                    <div className={style.content}>
                        <FormControl mb={3} isRequired isInvalid={err.name}>
                            <FormLabel>Tên quán</FormLabel>
                            <Input type='text' placeholder='Nhập tên quán'
                                name="name"
                                onChange={handleOnchangeFormInput}
                                value={formInput.name}
                            />
                            {err.name && <FormErrorMessage>{err.name}</FormErrorMessage>}
                        </FormControl>
                        <FormControl mb={3} isRequired isInvalid={err.area}>
                            <FormLabel>Khu vực</FormLabel>
                            <Select placeholder='Chọn 1 quận'
                                name="area"
                                value={formInput.area}
                                onChange={handleOnchangeFormInput}
                            >
                                {
                                    area?.data.map(item => (
                                        <option value={item._id} key={item._id}>{item.name}</option>
                                    ))
                                }
                            </Select>
                            {err.area && <FormErrorMessage>{err.area}</FormErrorMessage>}
                        </FormControl>
                        <FormControl mb={3} isRequired isInvalid={err.address}>
                            <FormLabel>Địa chỉ</FormLabel>
                            <Input type='text' placeholder='Nhập địa chỉ cụ thể'
                                onChange={handleOnchangeFormInput}
                                value={formInput.address}
                                name="address" />
                            {err.address && <FormErrorMessage>{err.address}</FormErrorMessage>}
                        </FormControl>
                        <FormControl mb={3} >
                            <FormLabel>Chỉ đường</FormLabel>
                            <Input type='text' placeholder='Nhập chỉ đường đến chi tiết nếu có thể'
                                onChange={handleOnchangeFormInput}
                                value={formInput.direct}
                                name="direct"
                            />

                        </FormControl>
                        <FormControl mb={3} >
                            <FormLabel>Giới thiệu</FormLabel>
                            <Textarea placeholder='Nhập giới thiệu về quán'
                                name="intro"
                                onChange={handleOnchangeFormInput}
                                value={formInput.intro}
                            />
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
                            <FormControl mb={3} display={['block', 'flex']} alignItems={'center'} isInvalid={err.time_min}>
                                <FormLabel w={'150px'}>Thời gian mở cửa</FormLabel>
                                <Box>
                                    <Input type='text' placeholder='10:00' w={['100%', '60%']}
                                        name="time_min"
                                        onChange={handleOnchangeFormInput}
                                        value={formInput.time_min}
                                    />
                                    {err.time_min && <FormErrorMessage>{err.time_min}</FormErrorMessage>}
                                </Box>
                            </FormControl>
                            <FormControl mb={3} display={['block', 'flex']} alignItems={'center'} isInvalid={err.time_max}>
                                <FormLabel>Đến</FormLabel>
                                <Box>
                                    <Input type='text' placeholder='22:00' w={['100%', '60%']}
                                        name="time_max"
                                        onChange={handleOnchangeFormInput}
                                        value={formInput.time_max}
                                    />
                                    {err.time_max && <FormErrorMessage>{err.time_max}</FormErrorMessage>}
                                </Box>
                            </FormControl>
                        </Flex>
                        <Flex justifyContent={"space-between"} direction={['column', 'row']} mb={3}>
                            <FormControl mb={3} display={['block', 'flex']} alignItems={'center'} isInvalid={err.price_min}>
                                <FormLabel w={'150px'}>Khoảng giá</FormLabel>
                                <Box>
                                    <Input type='text' placeholder='100,000' w={['100%', '60%']}
                                        name="price_min"
                                        onChange={handleOnchangeFormInput}
                                        value={formInput.price_min}
                                    />
                                    {err.price_min && <FormErrorMessage>{err.price_min}</FormErrorMessage>}
                                </Box>
                            </FormControl>
                            <FormControl mb={3} display={['block', 'flex']} alignItems={'center'} isInvalid={err.price_max} >
                                <FormLabel>Đến</FormLabel>
                                <Box>
                                    <Input type='text' placeholder='500,000' w={['100%', '60%']}
                                        name="price_max"
                                        onChange={handleOnchangeFormInput}
                                        value={formInput.price_max}
                                    />
                                    {err.price_max && <FormErrorMessage>{err.price_max}</FormErrorMessage>}
                                </Box>
                            </FormControl>
                        </Flex>
                        <FormControl mb={3}>
                            <FormLabel>Kiểu quán</FormLabel>
                            <SimpleGrid columns={[2, 4]} spacing={10}>
                                {
                                    categories?.data.map(item => (
                                        <Checkbox key={item._id} value={item._id} onChange={handleOnchangeCheckBoxType}>
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
                                        <Checkbox key={item._id} value={item._id} onChange={handleOnchangeCheckBoxUtities}>
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
                            <Input type='text' placeholder='Nhập số điện thoại'
                                name="phone"
                                onChange={handleOnchangeFormInput}
                                value={formInput.phone}
                            />
                        </FormControl>
                        <FormControl mb={3} isRequired>
                            <FormLabel>Facebook</FormLabel>
                            <Input type='text' placeholder='Nhập link facebook'
                                name="facebook"
                                onChange={handleOnchangeFormInput}
                                value={formInput.facebook}
                            />
                        </FormControl>
                        <FormControl mb={3} >
                            <FormLabel>Instagram</FormLabel>
                            <Input type='text' placeholder='Nhập link Instagram'
                                name="instagram"
                                onChange={handleOnchangeFormInput}
                                value={formInput.instagram}
                            />
                        </FormControl>
                        <FormControl mb={3} >
                            <FormLabel>Email</FormLabel>
                            <Input placeholder='Nhập địa chỉ email'
                                name="email"
                                onChange={handleOnchangeFormInput}
                                value={formInput.email}
                            />
                        </FormControl>
                        <FormControl mb={3} >
                            <FormLabel>Website</FormLabel>
                            <Input placeholder='Nhập link website'
                                name="website"
                                onChange={handleOnchangeFormInput}
                                value={formInput.website}
                            />
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
                {/* <section>
                    <h3 className={style.text2}>Menu</h3>
                    <UploadImage
                        type={PLACE_ACTIONS.MENU_IMAGE}
                        name={'menu_image'}
                        images={menuImage}
                    />
                    <div>Chọn tối đa 20 ảnh</div>
                </section> */}
                <section>
                    <Button colorScheme='red' size='lg' w={'100%'} mt={5} isLoading={alert.loading} onClick={() => onSubmit()}>
                        + Thêm địa điểm
                    </Button>
                </section>
            </div>
        </Container>
    )
}

export default Place