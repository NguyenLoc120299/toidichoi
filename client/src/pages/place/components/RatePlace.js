import React, { useEffect, useState } from 'react'
import { Box, Button, Center, Flex, Heading, Text } from '@chakra-ui/react'
import Rate from 'rc-rate';
import { useSelector } from 'react-redux';
const RatePlace = () => {
    const { auth } = useSelector(state => state)
    const score = ['Quá tệ', 'Trung bình', 'Bình thường', 'Tốt', 'Tuyệt vời']
    const [rate, setRate] = useState(0)
    const [rateText, setRateText] = useState('')
    const handleOnchange = (v) => {
        setRate(v);
    }


    return (
        <Center>
            <Box boxShadow='sm' rounded={'md'} p='6'>
                <Flex direction={'column'}>
                    <Center mb={5}>
                        <Heading size={'md'} mr={5}>{'Chua có đánh giá  '}</Heading>
                        <Button colorScheme={'red'}>
                            <Text
                                fontSize={'2xl'}
                                fontWeight={"bold"}>
                                {rate}
                            </Text>
                        </Button> /5 (1 đánh giá)
                    </Center>
                    {
                        auth.token ?

                            <Rate
                                style={{ fontSize: "60px" }}
                                value={rate}
                                allowHalf
                                onChange={handleOnchange} />
                            :
                            <Text fontSize={'xl'} fontWeight={"bold"}>Vui lòng đăng nhập để có thể đánh giá về nơi này</Text>
                    }
                </Flex>

            </Box>
        </Center>

    )
}

export default RatePlace