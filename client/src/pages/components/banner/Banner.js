import { Button, Center, Flex, FormControl, Input } from '@chakra-ui/react'
import React from 'react'
import styles from './baner.module.css'
import Typewriter from 'typewriter-effect';
import { AiOutlineSearch } from 'react-icons/ai'
const Banner = () => {
    return (
        <div className={styles.banner}>
            <Center>
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
                    <Center pt={3}>
                        <Flex display={['none', 'flex']}>
                            <FormControl mr={'3'}>
                                <Input type='text' focusBorderColor='none' color={"#aaa"} bg="#fff"
                                    placeholder='Tên quán ,khu vực,kiểu quán,..' w={{ sm: '100%', lg: '700px' }} size='lg' />
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