import { Box, Flex, Heading } from '@chakra-ui/react'
import Rate from 'rc-rate/lib/Rate'
import React, { useEffect, useState } from 'react'

const RateReview = ({ rate, setRate }) => {
    const [rateText, setRateText] = useState('')
    const handleOnchange = (v) => {
        setRate(v);
    }
    useEffect(() => {
        if (rate === 1) setRateText('Quá tệ')
        else if (rate === 2) setRateText('Trung bình')
        else if (rate === 3) setRateText('Bình thường')
        else if (rate === 4) setRateText("Tốt")
        else {
            setRateText("Tuyệt vời")
        }
    }, [rate])

    return (
        <>
            <Heading as={'h4'} fontSize="lg" textColor={'gray.500'}>Xếp hạng của bạn</Heading>
            <Flex justifyContent={'space-between'} alignItems="center">
                <Rate
                    style={{ fontSize: "50px" }}
                    value={rate}
                    onChange={handleOnchange}
                    character={<i className="fas fa-star"></i>}
                />
                <div className='rate__text '>
                    <span>{rateText}</span>
                </div>
            </Flex>

        </>
    )
}

export default RateReview