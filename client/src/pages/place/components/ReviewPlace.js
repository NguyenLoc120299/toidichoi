import { Box, Button, Flex, Heading, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import LIstReview from './LIstReview'
import ModalAddReview from './ModalAddReview'

const ReviewPlace = ({ item }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box boxShadow='md' rounded={'md'} p={['3', '6']}>
            <ModalAddReview
                isOpen={isOpen}
                onClose={onClose}
                place={item}
            />
            <Flex justifyContent={'space-between'} alignItems={'center'} py={3}>
                <Heading as={'h3'} size={['lg']} >Đánh giá từ cộng đồng</Heading>
                {
                    !item.loading &&
                    <Button
                        colorScheme={'red'}
                        borderRadius={'12px'}
                        onClick={onOpen}
                        _focus={{
                            border: 'unset'
                        }}
                    >Viết đánh giá</Button>
                }
            </Flex>
            <Box
                minH={'180px'}
                padding="10px 16px"
                bg={'red.100'}
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
                    borderBottom: '10px solid #ffdcd8'
                }}>
                <Flex>
                    <Box >
                        <img src="https://ik.imagekit.io/reviewcafe/Online_Review-cuate_wG_WzURJF.svg" style={{
                            width: "100%",
                            height: '100%'
                        }} />
                    </Box>
                    <Box>
                        <Heading as={'h4'} size="sm" mb={5}>Bạn đã từng đến đây</Heading>
                        <Text>Chia sẽ kinh nghiệm và trảu nghiệm cả bản thân cho mọi người cùng biết</Text>
                        <Text>Hãy chia sẽ thật những cảm xúc thật của bản thân chính mình </Text>
                    </Box>
                </Flex>
            </Box>
            <LIstReview item={item}/>
        </Box>
    )
}

export default ReviewPlace