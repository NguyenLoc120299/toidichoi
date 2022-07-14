import { Button, Center, Flex, FormControl, Input, Box, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader } from '@chakra-ui/react'
import React from 'react'
import styles from './baner.module.css'
import Typewriter from 'typewriter-effect';
import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLocationArrow } from 'react-icons/fa'
const Banner = () => {
    const [isShowSearchBox, setIsShowSearchBox] = useState(false)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const renderSearch = () => {
        return (
            <Box width={['100%', '700px']} bg="#fff" p={"14px"}>
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
        )
    }
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
                                <button class="desktop_btnReset"><i class="fas fa-times"></i></button>
                                {
                                    isShowSearchBox && renderSearch()

                                }

                            </FormControl>
                            <Button colorScheme='red' borderRadius={'8px'} size='lg' >
                                Tìm kiếm
                            </Button>
                        </Flex>
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
                            onClick={onOpen}
                        >
                            <AiOutlineSearch style={{ marginRight: '10px' }} /> Tìm kiếm
                        </Button>
                    </Center>

                </Flex>
            </Center>
            <Drawer onClose={onClose} isOpen={isOpen} size={'full'} placement={"right"} >
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
                                        font-size="16px"
                                        color="#606770"
                                        outline="none"
                                        border="none"
                                        height="28px"
                                        lineHeight="28px"
                                        marginLeft="6px"
                                        marginRight="16px"
                                        background="transparent"
                                        position="relative"
                                    />
                                </Box>
                                <button class="_btnReset">
                                    <i class="fas fa-times-circle"></i></button>
                            </Box>
                            <h3 class="searchCancel" onClick={onClose}>Huỷ</h3>
                        </Flex>
                    </DrawerHeader>

                    {renderSearch()}
                </DrawerContent>
            </Drawer>
        </div>
    )
}

export default Banner