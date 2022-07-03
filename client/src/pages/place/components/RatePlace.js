import React, { useEffect, useState } from 'react'
import { Box, Button, Center, Flex, Heading, Text } from '@chakra-ui/react'
import Rate from 'rc-rate';
import { useSelector } from 'react-redux';
const RatePlace = ({ item }) => {
    const { auth } = useSelector(state => state)
    const [rateText, setRateText] = useState('')
    useEffect(() => {
        if (item) {
            if (item.rateNumber <= 1) setRateText('Quá tệ')
            else if (item.rateNumber <= 2) setRateText('Trung bình')
            else if (item.rateNumber <= 3) setRateText('Bình thường')
            else if (item.rateNumber <= 4) setRateText("Tốt")
            else {
                setRateText("Tuyệt vời")
            }
        }
    }, [item])
    return (
        <Center justifyContent={'start'}>
            <Box boxShadow='sm' rounded={'md'} mt={5}>
                <Flex direction={'column'}>
                    <Center mb={5}>
                        <Heading size={'md'} mr={5}>{rateText}</Heading>
                        <Button colorScheme={'red'} mr={1}>
                            <Text
                                fontSize={'2xl'}
                                fontWeight={"bold"}>
                                {item && (item.rateNumber).toFixed(1)}
                            </Text>
                        </Button> /5 ( {item && item.turnNumber} đánh giá)
                    </Center>
                    {auth.token ?

                        <Rate
                            style={{ fontSize: "30px" }}
                            value={item && item.rateNumber}
                            allowHalf
                            disabled
                            character={<i className="fas fa-star"></i>} />
                        :
                        <Text fontSize={'xl'} fontWeight={"bold"}>Vui lòng đăng nhập để có thể đánh giá về nơi này</Text>}
                </Flex>
            </Box>
        </Center>

    )
}

export default RatePlace