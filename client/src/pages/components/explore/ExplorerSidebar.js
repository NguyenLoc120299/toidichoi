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
            style={{
                boxShadow: '0 2px 8px rgb(0 0 0 / 15%)'
            }}
        >
            {children}
        </Box>
    )
}
const ExplorerSidebar = ({ typeExplore, setTypeExplore }) => {
    return (
        <Box>
            <BoxCustom>
                <Flex justifyContent={'space-between'}>
                    <Flex
                        alignItems={'center'}
                        color={typeExplore === 1 ? "#e03" : "#404040"}
                        borderBottom={typeExplore === 1 && "4px solid #e03"}
                        fontWeight="500"
                        fontSize="18px"
                        padding="8px"
                        onClick={() => setTypeExplore(1)}
                        cursor={"pointer"}
                    >
                        <FaStar /> <Text ml={'5px'}>Bài nổi bật</Text>
                    </Flex>
                    <Flex justifyContent={'space-between'}>
                        <Flex
                            alignItems={'center'}
                            color={typeExplore === 2 ? "#e03" : "#404040"}
                            borderBottom={typeExplore === 2 && "4px solid #e03"}
                            fontWeight="500"
                            fontSize="18px"
                            padding="8px"
                            onClick={() => setTypeExplore(2)}
                            cursor={"pointer"}
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