import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { BoxAvatar } from './styled'

const ListReviewReply = () => {
    return (
        <Box>
            <Flex>
                <Box
                    textAlign={'center'}
                    mr="6px"
                >
                    <BoxAvatar />
                </Box>
                <Box>
                    <Box
                        padding="8px 15px"
                        border-radius="18px"
                        background-color="#f5f5f7"
                    >

                    </Box>
                </Box>
            </Flex>
        </Box>
    )
}

export default ListReviewReply