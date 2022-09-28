import { Button, Center, Flex, FormControl, Input, Box, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerHeader, Image, Spinner } from '@chakra-ui/react'
import React, { useEffect, useRef } from 'react'
import styles from './baner.module.css'
import Typewriter from 'typewriter-effect';
import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLocationArrow } from 'react-icons/fa'
import { ALERT_ACTION } from '../../../redux/actions/alertAction';
import { getDataAPI } from '../../../untils/fetchData';
import { useDispatch, useSelector } from 'react-redux';
import useClickOutSide from '../../../customHooks/clickOutSide';

export const renderPlacesAll = (placeSearch, styles, valueSearch) => {
    return (
        <Box width={['100%', '700px']} bg="#fff" p={"14px"} >
            <div className={styles.listPlace}>
                {
                    placeSearch.length > 0 && placeSearch.map((item, index) => (
                        <Link to={`/place/${item?._id}`} className={styles.searchItemPlace} key={index}>
                            <div className={styles.image}>
                                <Image src={item?.images[0]} alt={item?.name} />
                            </div>
                            <div className={styles.info}>
                                <div className={styles.name}>{item?.name}</div>
                                <div className={styles.address}>{item?.address}</div>
                            </div>

                        </Link>
                    ))
                }
                <Link to='/search' className={styles.searchItemPlace}>
                    <i className="fas fa-search-plus"></i>
                    <span>Xem tất cả tìm kiếm cho "{valueSearch}"</span>
                </Link>
            </div>
        </Box >
    )
}
export const renderSearch = (dataPlaceOffer, styles) => {
    return (
        <Box width={['100%', '700px']} bg="#fff" p={"14px"} >
            <Link to={'/search'} className={styles.searchItem}>
                <FaLocationArrow style={{ marginRight: '10px', fontSize: '30px' }} />
                <span>Tìm quanh đây</span>
            </Link>
            <div className={styles.searchTitile}>
                Đề xuất
            </div>
            <div className={styles.listPlace}>
                {
                    dataPlaceOffer.length > 0 && dataPlaceOffer.map((item, index) => (
                        <Link to={`/place/${item.totalData._id}`} className={styles.searchItemPlace} key={index}>
                            <div className={styles.image}>
                                <Image src={item.totalData.images[0]} alt={item.totalData.name} />
                            </div>
                            <div className={styles.info}>
                                <div className={styles.name}>{item.totalData.name}</div>
                                <div className={styles.address}>{item.totalData.address}</div>
                            </div>

                        </Link>
                    ))
                }

            </div>
            <div className={styles.searchTitile}>
                Đã xem gần đây
            </div>
            <div className={styles.listPlace}>
                <Link to="#" className={styles.searchItemPlace}>
                    <div className={styles.image}>

                    </div>
                    <div className={styles.info}>
                        <div className={styles.name}>Artemis Pastry & Coffee Shop</div>
                        <div className={styles.address}>20 Ngô Quyền, Tràng Tiền, Hoàn Kiếm, Hà Nội.</div>
                    </div>

                </Link>
            </div>

        </Box>
    )
}
const Banner = () => {
    const [isShowSearchBox, setIsShowSearchBox] = useState(false)
    const searchRef = useRef(null);
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placeSearch, setPlaceSearch] = useState([])
    const [dataPlaceOffer, setdataPlaceOffer] = useState([])
    const [valueSearch, setValueSearch] = useState('')
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const getPlaceTrending = async () => {
        try {
            const res = await getDataAPI('place-outstanding')
            if (res && res.data) setdataPlaceOffer(res.data.slice(0, 2))
        } catch (error) {
            dispatch({
                type: ALERT_ACTION.ALERT,
                payload: {
                    err: error.response.data.msg
                }
            })
        }
    }
    const handleOnChange = async (value) => {
        setLoading(true)
        dispatch({
            type: ALERT_ACTION.ALERT,
            payload: {
                loading: true
            }
        })
        const res = await getDataAPI(`places/search?name=${value}`)
        setPlaceSearch(res.data.places)
        dispatch({
            type: ALERT_ACTION.ALERT,
            payload: {}
        })
        setLoading(false)
    }
    const closeSearchHandler = (e) => {
        if (isShowSearchBox) {
            setIsShowSearchBox(false)
            setValueSearch('')
            return;
        }
    };
    useClickOutSide(closeSearchHandler, searchRef)
    useEffect(() => {
        getPlaceTrending()
    }, [])
    const valueBtnReset = (value) => {
        setValueSearch('')
    }
    const handleSearch = async (e) => {
        const value = e.target.value
        setValueSearch(value)
    }
    useEffect(() => {
        const keyDownHandler = event => {
            if (event.key === 'Enter') {
                event.preventDefault();
                handleOnChange(valueSearch)
            }
        };
        document.addEventListener('keydown', keyDownHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, [valueSearch]);
    return (
        <div className={`${styles.banner} ${isShowSearchBox && styles.showSearchBox}`}>

            <Center zIndex={3}>
                <Flex direction={"column"}>
                    <Center pb={3} >
                        <Typewriter

                            options={{
                                strings: ['Lên đồ ta đi thoi'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </Center>
                    <p className={styles.text1}>Khám phá những địa điểm ăn uống tại Sài Gòn</p>
                    <Center pt={3} >
                        <Flex display={['none', 'flex']} ref={searchRef} >

                            <FormControl mr={'3'} >
                                {
                                    valueSearch.length > 0 &&
                                    <div className='desktop_btnReset' onClick={valueBtnReset}>
                                        {
                                            loading ?
                                                <Spinner size='xs' />
                                                :
                                                <i class="fas fa-times"></i>
                                        }

                                    </div>
                                }

                                <Input type='text' focusBorderColor='none' color={"#aaa"} bg="#fff"
                                    height={"65px"}
                                    borderBottomLeftRadius={isShowSearchBox && "unset"}
                                    borderBottomRightRadius={isShowSearchBox && "unset"}
                                    placeholder='Tên quán ,khu vực,kiểu quán,..' w={{ sm: '100%', lg: '700px' }} size='lg'
                                    onClick={() => setIsShowSearchBox(true)}
                                    position="relative"
                                    value={valueSearch}
                                    onChange={handleSearch}
                                >

                                </Input>


                                {
                                    valueSearch.length > 0 && isShowSearchBox ? renderPlacesAll(placeSearch, styles, valueSearch) : isShowSearchBox && renderSearch(dataPlaceOffer, styles)

                                }

                            </FormControl>
                            <Button colorScheme='red' borderRadius={'8px'} size='lg' h={"65px"} w={"200px"}
                                _focus={{ border: 'unset' }}
                                ref={searchRef} className="custom_btn"
                                onClick={() => handleOnChange(valueSearch)}
                            >
                                <i className="fas fa-search" style={{ marginRight: '5px' }}></i>  Tìm kiếm
                            </Button>
                        </Flex>8
                        <Button
                            borderRadius={'8px'} size='md'
                            minW={"250px"}
                            display={['flex', 'none']}
                            color="#6d6f71"
                            background="#fff"
                            _focus={{
                                border: 'unset',
                                background: '#fff'
                            }}
                            className="custom_btn"
                            onClick={() => {
                                dispatch({
                                    type: ALERT_ACTION.TOGGLESEARCH,
                                    payload: {
                                        isShowModalSearch: true
                                    }
                                })
                            }}

                        >
                            <AiOutlineSearch style={{ marginRight: '10px' }} /> Tìm kiếm
                        </Button>
                    </Center>

                </Flex>
            </Center >
        </div >
    )
}

export default Banner