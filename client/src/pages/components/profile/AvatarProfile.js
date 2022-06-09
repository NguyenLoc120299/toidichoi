import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'

const AvatarProfile = () => {
    return (
        <Box
            w={'100%'}
            position={"relative"}
            paddingBottom={"100px"}
        >
            <Center
                position={'relative'}
                w={'100%'}
                height={'250px'}
                padding={'20px 40px'}
                borderBottomLeftRadius='16px'
                borderBottomRightRadius='16px'
                background='linear-gradient(180deg,#ffb8b8,#fafafa)'
            >
                <Center
                    flexDirection={'column'}
                    position={'absolute'}
                    top={'34%'}
                >
                    <Box
                        position="relative"
                        width="200px"
                        height="200px"
                        padding="6px"
                        borderRadius="50%"
                        background="#fff"
                    >
                        <Box
                            backgroundImage={'url(https://lh3.googleusercontent.com/a/AATXAJw07Jo348XQSk5ol5Vh-rE_ygsM4BJMzAqdjYGj=s200-c)'}
                            backgroundPosition={'50%'}
                            backgroundSize={'cover'}
                            backgroundRepeat={"no-repeat"}
                            backgroundColor={'#fff'}
                            border={"none"}
                            width={"100%"}
                            h={'100%'}
                            borderRadius={"50%"}
                        >

                        </Box>
                        <Box
                            background={"#ddd"}
                            position={"absolute"}
                            top="auto"
                            right="20px"
                            bottom={'10px'}
                            left='auto'
                            cursor={'pointer'}
                            w={"38px"}
                            h={'38px'}
                            fontSize={"20px"}
                            lineHeight={"38px"}
                            textAlign={"center"}
                            borderRadius={"50%"}
                            color="#404040"
                        >

                        </Box>

                    </Box>
                    <Text as={'h1'}
                        display={'flex'}
                        justifyContent={"center"}
                        fontSize={'32px'}
                        fontWeight={700}
                    >
                        Loc
                    </Text>

                </Center>
            </Center>
        </Box>
    )
}

export default AvatarProfile