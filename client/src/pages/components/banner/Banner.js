import { Button, Center, Flex, FormControl, Input, Box } from '@chakra-ui/react'
import React from 'react'
import styles from './baner.module.css'
import Typewriter from 'typewriter-effect';
import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLocationArrow } from 'react-icons/fa'
const Banner = () => {
    const [isShowSearchBox, setIsShowSearchBox] = useState(false)
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
                        <Flex display={['none', 'flex']}>
                            <FormControl mr={'3'}>
                                <Input type='text' focusBorderColor='none' color={"#aaa"} bg="#fff"

                                    borderBottomLeftRadius={isShowSearchBox && "unset"}
                                    borderBottomRightRadius={isShowSearchBox && "unset"}
                                    placeholder='Tên quán ,khu vực,kiểu quán,..' w={{ sm: '100%', lg: '700px' }} size='lg'
                                    onClick={() => setIsShowSearchBox(true)}
                                />
                                {
                                    isShowSearchBox && <Box display={['none', 'block']} width={'700px'} bg="#fff" p={"14px"}>
                                        <Link to={'/search'} className={styles.searchItem}>
                                            <FaLocationArrow style={{ marginRight: '10px', fontSize: '30px' }} />
                                            <span>Tìm quanh đây</span>
                                        </Link>
                                        <div className={styles.searchTitile}>
                                            Đề xuất
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

                            </FormControl>
                            <Button colorScheme='red' borderRadius={'8px'} size='lg'>
                                Tìm kiếm
                            </Button>
                        </Flex>
                        <Button colorScheme='whiteAlpha' borderRadius={'8px'} size='sm' minW={"250px"} display={['flex', 'none']}>
                            <AiOutlineSearch style={{ marginRight: '10px' }} /> Tìm kiếm ...
                        </Button>
                    </Center>

                </Flex>
            </Center>
        </div>
    )
}

export default Banner