import { Box, Heading, Text, Button, Center } from '@chakra-ui/react';

export default function NotFound() {
    return (

        <Box textAlign="center" py={10} px={6} h="100vh">
            <Center h={'100%'}>
                <Box>
                    <Heading
                        display="inline-block"
                        as="h2"
                        size="2xl"
                        bgGradient="linear(to-r, red.400, red.600)"
                        backgroundClip="text">
                        404
                    </Heading>
                    <Text fontSize="18px" mt={3} mb={2} color="red.500">
                        Không tìm thấy trang
                    </Text>
                    <Text color={'gray.500'} fontSize={'3xl'} mb={6}>
                        Trang này  hiện không tồn tại
                    </Text>

                    <Button
                        colorScheme="red"
                        bgGradient="linear(to-r, red.400, red.500, red.600)"
                        color="white"
                        variant="solid">
                        Go to Home
                    </Button>
                </Box>
            </Center>
        </Box>
    );
}