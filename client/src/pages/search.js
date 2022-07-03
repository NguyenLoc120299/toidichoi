import React, { useEffect, useState } from 'react'
import { Box, Container, Grid, GridItem, Checkbox, Flex, Radio, RadioGroup, Stack, Text, HStack, Tag, TagLabel, TagCloseButton, Image } from '@chakra-ui/react'
import { BoxLayput, TextTitleFilter } from './search/style'
import { Collapse } from 'antd'
import { Slider } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import numeral from 'numeral'
import { ALERT_ACTION } from '../redux/actions/alertAction';
import { postDataAPI } from '../untils/fetchData';
import { Link } from 'react-router-dom';
import Rate from 'rc-rate/lib/Rate'
import moment from 'moment';
const { Panel } = Collapse;

const Search = () => {
    const area = useSelector(state => state.area)
    const categories = useSelector(state => state.categories)
    const utities = useSelector(state => state.utities)
    const dispatch = useDispatch()
    const [filterData, setFilterData] = useState({
        priceData: [],
        typeData: [],
        utitiesData: [],
        areaData: [],
        isTimeOpen: false


    })
    const [places, setPlaces] = useState([])
    const onChange = (key) => {
        console.log(key);
    };
    const onChangeSlider = (newValue) => {
        setFilterData({
            ...filterData, priceData: newValue
        })
    };
    const isOpenning = (timeMin, timeMax) => {
        const currentHour = moment().format('HH:mm')
        if (moment(currentHour, 'HH:mm').isBefore(moment(timeMax, 'HH:mm')) &&

            moment(currentHour, 'HH:mm').isAfter(moment(timeMin, 'HH:mm'))) {
            return true
        }
        else {
            return false
        }
    }
    const onFilterData = async () => {
        try {
            const places = await postDataAPI('search', {
                typeData: filterData.typeData,
                utitiesData: filterData.utitiesData,
                priceData: filterData.priceData,
                areaData: filterData.areaData,
                isTimeOpen: filterData.isTimeOpen
            })
            setPlaces(places.data.data)
        } catch (error) {
            dispatch({
                type: ALERT_ACTION.ALERT,
                payload: {
                    err: error.response.data.msg
                }
            })
        }
    }
    const handleOnChaneTimeOpen = (e) => {
        setFilterData({
            ...filterData,
            isTimeOpen: e.target.value
        })
    }
    const handleOnchangeCheckBoxType = (e, item) => {
        if (e.target.checked)
            setFilterData({
                ...filterData,
                typeData: [...filterData.typeData, item],

            })
        else {
            let newTypeData = filterData.typeData.filter(el => el._id !== item._id)
            setFilterData({
                ...filterData,
                typeData: newTypeData
            })

        }
    }
    const isCheckedType = (id) => {
        let newTypeData = filterData.typeData.filter(el => el._id === id)
        if (newTypeData[0]) return true
        else return false
    }
    const handleOnchangeCheckBoxUtites = (e, item) => {
        if (e.target.checked)
            setFilterData({
                ...filterData,
                utitiesData: [...filterData.utitiesData, item],

            })
        else {
            let newUtitiesData = filterData.utitiesData.filter(el => el._id !== item._id)
            setFilterData({
                ...filterData,
                utitiesData: newUtitiesData
            })
        }
    }
    const isCheckedUtites = (id) => {
        let newUtitiesData = filterData.utitiesData.filter(el => el._id === id)
        if (newUtitiesData[0]) return true
        else return false
    }
    const handleOnchangeCheckBoxArea = (e, item) => {
        if (e.target.checked)
            setFilterData({
                ...filterData,
                areaData: [...filterData.areaData, item],

            })
        else {
            let newAreaData = filterData.areaData.filter(el => el._id !== item._id)
            setFilterData({
                ...filterData,
                areaData: newAreaData
            })
        }
    }
    const isCheckedArea = (id) => {
        let newAreaData = filterData.areaData.filter(el => el._id === id)
        if (newAreaData[0]) return true
        else return false
    }
    const deleteTypeData = (index) => {
        const newTypeData = [...filterData.typeData]
        newTypeData.splice(index, 1)
        setFilterData({
            ...filterData,
            typeData: newTypeData
        })
    }
    const deleteUtitesData = (index) => {
        const newTypeData = [...filterData.utitiesData]
        newTypeData.splice(index, 1)
        setFilterData({
            ...filterData,
            utitiesData: newTypeData
        })
    }
    const deleteAreaData = (index) => {
        const newTypeData = [...filterData.areaData]
        newTypeData.splice(index, 1)
        setFilterData({
            ...filterData,
            areaData: newTypeData
        })
    }

    useEffect(() => {
        onFilterData()
    }, [filterData])
    console.log(places);
    return (
        <Box
            w={'100%'}
            h="100%"
            minH={'calc(100vh - 360px)'}

        >
            <Container maxW={'1280px'}>
                <Grid

                    templateRows='repeat(2, 1fr)'
                    templateColumns='repeat(8, 1fr)'
                    gap={4}
                >
                    <GridItem colSpan={2} >
                        <BoxLayput>
                            <Box
                                borderBottom="1px solid #e0e0e0"
                                padding=" 16px 0"
                            >
                                <TextTitleFilter>Lọc kết quả</TextTitleFilter>

                            </Box>
                            <Box>
                                <Collapse
                                    onChange={onChange}
                                    bordered
                                    expandIconPosition="right"
                                    // accordion
                                    ghost
                                    defaultActiveKey={['1', '2', '3', '4', '5', '6']}
                                >
                                    <Panel header="Khu vực" key="1">
                                        <Flex direction={'column'}>
                                            {
                                                area.data.length > 0 && area.data.map((item) => (
                                                    <Checkbox key={item._id} value={item} colorScheme='red'
                                                        _focus={{ border: 'unset' }} size={'lg'}
                                                        isChecked={isCheckedArea(item._id)}
                                                        onChange={(e) => handleOnchangeCheckBoxArea(e, item)}
                                                    >
                                                        {item.name}
                                                    </Checkbox>
                                                ))
                                            }
                                        </Flex>


                                    </Panel>
                                    <Panel header="Mục đích" key="2">
                                        <Flex direction={'column'}>
                                            {
                                                categories.data.length > 0 && categories.data.map((item) => (
                                                    <Checkbox

                                                        key={item._id} value={item._id} colorScheme='red'
                                                        _focus={{ border: 'unset' }} size={'lg'}
                                                        onChange={(e) => handleOnchangeCheckBoxType(e, item)}
                                                        isChecked={isCheckedType(item._id)}
                                                    >
                                                        {item.name}
                                                    </Checkbox>
                                                ))
                                            }
                                        </Flex>
                                    </Panel>

                                    <Panel header="Tiện ích" key="4">
                                        <Flex direction={'column'}>
                                            {
                                                utities.data.length > 0 && utities.data.map((item) => (
                                                    <Checkbox

                                                        key={item._id} value={item._id} colorScheme='red'
                                                        _focus={{ border: 'unset' }} size={'lg'}
                                                        onChange={(e) => handleOnchangeCheckBoxUtites(e, item)}
                                                        isChecked={isCheckedUtites(item._id)}
                                                    >
                                                        {item.name}
                                                    </Checkbox>
                                                ))
                                            }
                                        </Flex>
                                    </Panel>
                                    <Panel header="Khoảng giá" key="5">
                                        <Text
                                            display="block"
                                            textAlign="center"
                                            fontSize="18px"
                                            color="#e03"
                                            fontWeight="600"
                                        >{filterData.priceData ? numeral(filterData.priceData[0]).format('0,0') : 0} ~
                                            {filterData.priceData ? numeral(filterData.priceData[1]).format('0, 0') : numeral(300000).format('0,0')} VND</Text>
                                        <Slider range defaultValue={[0, 300000]} min={0} max={300000} onChange={onChangeSlider} />
                                    </Panel>
                                    <Panel header="Giờ mở cửa" key="6">
                                        <Flex direction={'column'}>
                                            {/* <RadioGroup defaultValue={1} display="flex" flexDirection={'column'}>
                                                <Radio value={1} colorScheme="red">Tất cả</Radio>
                                                <Radio value={2} colorScheme="red">Đang mở cửa</Radio>
                                            </RadioGroup> */}
                                            <RadioGroup defaultValue={'1'}>
                                                <Stack spacing={5} direction='column'>
                                                    <Radio colorScheme='red' value={1} onChange={handleOnChaneTimeOpen}>
                                                        Tất cả
                                                    </Radio>
                                                    <Radio colorScheme='red' value={2} onChange={handleOnChaneTimeOpen}>
                                                        Đang mở cửa
                                                    </Radio>
                                                </Stack>
                                            </RadioGroup>
                                        </Flex>
                                    </Panel>
                                </Collapse>
                            </Box>
                        </BoxLayput>
                    </GridItem>
                    <GridItem colSpan={6}>
                        <Box
                            display={'flex'}
                            justifyContent={"space-between"}
                        >
                            <Box>
                                <span>
                                    <TextTitleFilter>{places.length} địa điểm khớp với tìm kiếm của bạn :</TextTitleFilter>
                                </span>
                            </Box>

                        </Box>
                        <Box mb={12}>
                            <HStack spacing={4} flexWrap="wrap">
                                {
                                    filterData.typeData.length > 0
                                    && filterData.typeData.map((item, index) => (
                                        <Tag
                                            size={"lg"}
                                            key={index}
                                            borderRadius='full'
                                            variant='outline'
                                            colorScheme='red'
                                            mb={3}

                                        >
                                            <TagLabel>{item.name}</TagLabel>
                                            <TagCloseButton onClick={() => deleteTypeData(index)} />
                                        </Tag>
                                    ))
                                }
                                {
                                    filterData.utitiesData.length > 0
                                    && filterData.utitiesData.map((item, index) => (
                                        <Tag
                                            size={"lg"}
                                            key={index}
                                            borderRadius='full'
                                            variant='outline'
                                            colorScheme='red'
                                            mb={3}
                                        >
                                            <TagLabel>{item.name}</TagLabel>
                                            <TagCloseButton onClick={() => deleteUtitesData(index)} />
                                        </Tag>
                                    ))
                                }
                                {
                                    filterData.areaData.length > 0
                                    && filterData.areaData.map((item, index) => (
                                        <Tag
                                            size={"lg"}
                                            key={index}
                                            borderRadius='full'
                                            variant='outline'
                                            colorScheme='red'
                                            mb={3}
                                        >
                                            <TagLabel>{item.name}</TagLabel>
                                            <TagCloseButton onClick={() => deleteAreaData(index)} />
                                        </Tag>
                                    ))
                                }

                            </HStack>
                        </Box>
                        {
                            places.length > 0 && places.map((item) => (
                                <BoxLayput>
                                    <Flex

                                    >
                                        <Link to={`/place/${item._id}`}>
                                            <Box
                                                backgroundColor="#eee"
                                                backgroundImage=" linear-gradient(90deg,#eee,#f5f5f5,#eee)"
                                                backgroundSize="200px 100%"
                                                backgroundRepeat="no-repeat"
                                                overflow="hidden"
                                                borderRadius="calc(10px - 4px)"
                                                width="270px"
                                                height="100%"
                                            >
                                                <Box
                                                    height="100%"
                                                    width="100%"
                                                    position="relative"
                                                    overflow="hidden"
                                                >
                                                    <Image src={item.images[0]} alt="" />
                                                </Box>

                                            </Box>
                                        </Link>
                                        <Box
                                            padding="6px 24px 24px"
                                            min-height="150px"
                                        >
                                            <Link to={`/place/${item._id}`}>
                                                <TextTitleFilter>{item.name}</TextTitleFilter>
                                            </Link>
                                            <Box>
                                                <span><Rate value={item.rate.rateNumber} allowHalf disabled character={<i className="fas fa-star"></i>} /> - {item.rate.turnNumber} đánh giá</span>
                                            </Box>
                                            <Box fontSize={'16px'} pt={2}>
                                                <i className="fas fa-dollar-sign" style={{ marginRight: '5px' }}></i>
                                                {numeral(item.price.min).format('0,0')}đ - {numeral(item.price.max).format('0,0')}đ

                                            </Box>
                                            <Box pt={2} fontSize={'16px'}>
                                                <i className="fas fa-map-marker-alt" style={{ marginRight: '5px' }}></i>
                                                {item.address}
                                            </Box>
                                            <Box pt={2} fontSize={'16px'}>
                                                <i class="fas fa-clock" style={{ marginRight: '5px' }}></i>
                                                {isOpenning(item.time.min, item.time.max) ?
                                                    <span style={{ fontWeight: '600', color: "#00b707" }}>Đang mở cửa</span>
                                                    : <span style={{ fontWeight: '600', color: "red" }}>Chưa mở cửa</span>}    {item.time.min} - {item.time.max}
                                            </Box>
                                            <Box pt={2} fontSize={'16px'}>
                                                <i class="fas fa-comment" style={{ marginRight: '5px' }}></i>
                                                {item.reviews.length} lượt thảo luận
                                            </Box>
                                        </Box>


                                    </Flex>


                                </BoxLayput>
                            ))
                        }
                    </GridItem>
                </Grid>
            </Container>
        </Box >
    )
}

export default Search