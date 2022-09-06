import { Box, Flex, Image, Input } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import useClickOutSide from '../customHooks/clickOutSide'
import styles from '../pages/components/banner/baner.module.css'
import { ALERT_ACTION } from '../redux/actions/alertAction'
import { getDataAPI } from '../untils/fetchData'
const SearchNavbar = ({ isToggle, toggleBoxSearch }) => {
    const { pathname } = useLocation()
    const [dataPlaceOffer, setdataPlaceOffer] = useState([])
    const dispatch = useDispatch()
    const searchRef = useRef(null);
    const styled = {
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        backgroundColor: "#fff",
        boxShadow: "0 2px 8px #cccc",
        width: "500px",
        display: 'flex',
        padding: '10px',
        justifyContent: 'center',
        borderRadius: '0 0 12px 12px',
        flexDirection: "column",
        zIndex: '99999'
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
    useClickOutSide(() => toggleBoxSearch(false), searchRef)
    useEffect(() => {
        getPlaceTrending()
    }, [])
    if (pathname === '/' || pathname === '/home')
        return <></>
    else
        return (
            <Box mr={"15px"}
                style={isToggle ? { ...styled } : { position: 'unset' }}
                ref={searchRef}
            >
                <Flex
                    flexDirection="column"
                    width={isToggle ? "100%" : "300px"}
                    height={isToggle ? '40px' : '35px'}
                    padding={"0 8px"}
                    margin="0"
                    position="relative"
                    backgroundColor="#f0f2f5"
                    borderRadius="20px"
                    alignItems={'center'}

                >
                    <Flex
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        w={"100%"}
                        height={'30px'}
                        p={'0 6px'}
                        border="1px solid transparent"
                        mb={3}
                    >
                        <i className="fas fa-search" />
                        <Input
                            fontSize="16px"
                            color="#606770"
                            outline="none"
                            border="none"
                            height="28px"
                            lineHeight="28px"
                            marginLeft="6px"
                            background="transparent"
                            position="relative"
                            placeholder='Tìm địa điểm'
                            onClick={() => toggleBoxSearch(true)}
                            _focus={{
                                boxShadow: "unset"
                            }}
                        />
                    </Flex>

                </Flex>
                {
                    isToggle &&
                    <Box mt={5} >
                        <Link to={'/search'} className={styles.searchItem}>
                            <FaLocationArrow style={{ marginRight: '10px', fontSize: '20px' }} />
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
                }
            </Box>
        )
}

export default SearchNavbar