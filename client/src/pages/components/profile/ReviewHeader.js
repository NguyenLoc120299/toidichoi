import { Box, Center, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'

const ReviewHeader = () => {
    return (
        <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'flex-start'}
            position='relative'
        >
            <Box
                backgroundColor="#eee"
                backgroundPosition="50%"
                backgroundSize="cover"
                backgroundRepeat="no-repeat"
                flex="0 0 auto"
                cursor="pointer"
                width="46px"
                height="46px"
                borderRadius="50%"
                border="none"
                overflow="hidden"
            >
                <Box
                    height="100%"
                    width="100%"
                    position="relative"
                >
                    <Image src="https://lh3.googleusercontent.com/a/AATXAJw07Jo348XQSk5ol5Vh-rE_ygsM4BJMzAqdjYGj=s96-c"
                        backgroundPosition="50%"
                        backgroundSize="cover"
                        height="100%"
                        width="100%"
                        objectFit="cover"
                    />

                </Box>
            </Box>

            <Box

                margin=" 0 30px 0 8px"
            >
                <Box>
                    <Link href='#'>123</Link>

                    <Link href="/place/mobius-space-cafe-boardgame"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontSize="18px"
                        fontWeight="600"
                        letterSpacing=".4px"
                        marginRight="5px"
                        color="#000"
                    >Mobius Space - Cafe &amp; Boardgame</Link>
                </Box>
                <Center justifyContent={'flex-start'}>
                    <span>****</span>
                    <Box m={"0 6px"}></Box>
                    <Text as="p"
                        color="#898c95"
                    >
                        time
                    </Text>
                </Center>
            </Box>
        </Box>
    )
}

export default ReviewHeader