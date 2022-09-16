import { Box, Button, Flex, Grid, GridItem, Heading, SimpleGrid, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import LIstReview from './LIstReview'
import ModalAddReview from './ModalAddReview'
import RatePlace from './RatePlace'

const ReviewPlace = ({ item }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box boxShadow="0 2px 8px rgb(0,0,0,15%)" rounded={'md'} p={['1', '6']} mb={[0, 10]}>
            <ModalAddReview
                isOpen={isOpen}
                onClose={onClose}
                place={item}
            />
            <Flex justifyContent={'space-between'} alignItems={'center'} py={3}>
                <Heading as={'h3'} size={['md','lg']} >Đánh giá từ cộng đồng</Heading>
                {
                    !item.loading &&
                    <Button
                        colorScheme={'red'}
                        rounded={'lg'}
                        onClick={onOpen}
                        p={7}
                        _focus={{
                            border: 'unset'
                        }}
                        className="custom_btn"
                    >Viết đánh giá</Button>
                }
            </Flex>
            <Box
                minH={'180px'}
                padding="10px 16px"
                className='custom_btn'
                borderRadius="20px" position={'relative'}
                _after={{
                    position: "absolute",
                    content: '""',
                    top: "-10px",
                    right: '36px',
                    bottom: 'auto',
                    left: 'auto',
                    width: 0,
                    height: 0,
                    borderLeft: '10px solid transparent',
                    borderRight: '10px solid transparent',
                    borderBottom: '10px solid #d71479'
                }}>
                <Flex direction={['column', 'row']}>
                    <Box >
                        <img src="https://ik.imagekit.io/reviewcafe/Online_Review-cuate_wG_WzURJF.svg" style={{
                            width: "100%",
                            height: '100%'
                        }} />
                    </Box>
                    <Box>
                        <Heading as={'h4'} color="white" size="lg" mb={5}>Bạn đã từng đến đây</Heading>
                        <Text>Chia sẽ kinh nghiệm và trảu nghiệm cả bản thân cho mọi người cùng biết</Text>
                        <Text>Hãy chia sẽ thật những cảm xúc thật của bản thân chính mình </Text>
                        <RatePlace item={item.rate} />
                    </Box>
                </Flex>
            </Box>
            <Grid templateColumns='repeat(5, 1fr)' gap={6}>
                <GridItem colSpan={[5, 3]}>
                    <LIstReview item={item} />
                </GridItem>
                <GridItem colSpan={[5, 3]}>

                </GridItem>
            </Grid>

        </Box>
    )
}

export default ReviewPlace