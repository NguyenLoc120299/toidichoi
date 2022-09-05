import { Box, Flex, Input } from '@chakra-ui/react'
import React from 'react'
import { useLocation } from 'react-router-dom'

const SearchNavbar = () => {
    const { pathname } = useLocation()
    console.log(pathname !== '/');
    if (pathname !== '/' || pathname !== '/home')
        return (
            <Box mr={"15px"}>
                <Flex
                    flexDirection="column"
                    width="300px"
                    padding="6px 8px"
                    margin="0"
                    position="relative"
                    backgroundColor="#f0f2f5"
                    borderRadius="20px"
                    alignItems={'center'}
                >
                    <Flex
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        w={"100%"}
                        height={'30px'}
                        p={'0 6px'}
                        border="1px solid transparent"
                    >
                        <i className="fas fa-search" />
                        <Input
                            fontSize="16px"
                            color="#606770"
                            outline="none"
                            border="none"
                            height="28px"
                            lineHeight="28px"
                            marginLeft="6px"
                            background="transparent"
                            position="relative"
                            _focus={{
                                boxShadow: "unset"
                            }}
                        />
                    </Flex>
                </Flex>
            </Box>
        )
    else {
        return (
            <></>
        )
    }
}

export default SearchNavbar