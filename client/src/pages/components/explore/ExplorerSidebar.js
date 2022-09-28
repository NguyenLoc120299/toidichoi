import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { FaStar, FaUserCheck } from 'react-icons/fa'
import PlaceTrending from './PlaceTrending'
import UserTrending from './UserTrending'
export const BoxCustom = ({ children }) => {
    return (
        <Box
            padding="12px 16px"
            marginBottom="20px"
            backgroundColor="#fff"
            borderRadius="10px"
            box-shadow="0 2px 8px rgb(0 0 0 / 15%"
        >
            {children}
        </Box>
    )
}
const ExplorerSidebar = () => {
    return (
        <Box>
            <BoxCustom>
                <Flex justifyContent={'space-between'}>
                    <Flex
                        alignItems={'center'}
                        color="#e03"
                        borderBottom="4px solid #e03"
                        fontWeight="500"
                        fontSize="18px"
                        padding="8px"

                    >
                        <FaStar /> <Text ml={'5px'}>Bài nổi bật</Text>
                    </Flex>
                    <Flex justifyContent={'space-between'}>
                        <Flex
                            alignItems={'center'}
                            color=" #404040"

                            fontWeight="500"
                            fontSize="18px"
                            padding="8px"

                        >
                            <FaUserCheck /> <Text ml={'5px'}>Đang theo dõi</Text>
                        </Flex>
                    </Flex>
                </Flex>

            </BoxCustom>
            <PlaceTrending />
            <UserTrending />
        </Box >
    )
}

export default ExplorerSidebar