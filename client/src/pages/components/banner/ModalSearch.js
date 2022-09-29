import { Box, Drawer, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Input, Spinner } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ALERT_ACTION } from '../../../redux/actions/alertAction'
import { getDataAPI } from '../../../untils/fetchData'
import styles from '../banner/baner.module.css'
import { renderPlacesAll, renderSearch } from './Banner'
const ModalSearch = () => {
    const dispatch = useDispatch()
    const [valueSearch, setValueSearch] = useState('')
    const [placeSearch, setPlaceSearch] = useState([])
    const [dataPlaceOffer, setdataPlaceOffer] = useState([])
    const [loading, setLoading] = useState(false)
    const alert = useSelector(state => state.alert)
    const handleSearch = async (e) => {
        const value = e.target.value
        setValueSearch(value)
    }
    const handleOnChange = async (value) => {
        setLoading(true)
        const res = await getDataAPI(`places/search?name=${value}`)
        setPlaceSearch(res.data.places)
        setLoading(false)
    }
    const valueBtnReset = (value) => {
        setValueSearch('')
    }
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
    useEffect(() => {
        getPlaceTrending()
    }, [])

    useEffect(() => {
        if (valueSearch.length > 0) {
            handleOnChange(valueSearch)
        }
    }, [valueSearch])
    const closeDrawer = () => {
        dispatch({
            type: ALERT_ACTION.TOGGLESEARCH,
            payload: {
                isShowModalSearch: false
            }
        })
    }
    return (
        <Drawer isOpen={alert?.isShowModalSearch} size={'full'} placement={"right"} >
            <DrawerOverlay />
            <DrawerContent overflow="scroll">
                <DrawerHeader>
                    <Flex justifyContent={'space-between'}
                        p={"12px"}
                        alignItems="center"
                    >
                        <Box
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            height={"40px"}
                            padding={'0 6px'}
                            position="relative"
                            backgroundColor="#f0f2f5"
                            borderRadius="6px"
                            flexGrow={'1'}
                        >
                            <Box

                                display="flex "
                                alignItems="center"
                                justifyContent="space-between"
                                width="100%"
                                height="30px"
                                padding="0 6px"
                                border="1px solid transparent"
                            >
                                <i className="fas fa-search " style={{
                                    fontSize: "18px",
                                    color: "#606770"
                                }}></i>
                                <Input
                                    _focus={{
                                        border: 'none'
                                    }}
                                    placeholder="Nhập tên quán, khu vực, kiểu quán,..."
                                    flex="1 1"
                                    fontSize="16px"
                                    color="#606770"
                                    outline="none"
                                    border="none"
                                    height="28px"
                                    lineHeight="28px"
                                    marginLeft="6px"
                                    marginRight="16px"
                                    background="transparent"
                                    position="relative"
                                    value={valueSearch}
                                    onChange={handleSearch}
                                />
                            </Box>
                            {
                                loading ?
                                    <Spinner size='xs' />
                                    :
                                    valueSearch.length > 0 &&
                                    <button className="_btnReset" onClick={valueBtnReset}>
                                        <i className="fas fa-times-circle"></i></button>

                            }
                        </Box>

                        <h3 className="searchCancel" onClick={closeDrawer}>Huỷ</h3>

                    </Flex>
                </DrawerHeader>

                {valueSearch.length > 0 ? renderPlacesAll(placeSearch, styles, valueSearch, closeDrawer) : renderSearch(dataPlaceOffer, styles, closeDrawer)}
            </DrawerContent>
        </Drawer>
    )
}

export default ModalSearch