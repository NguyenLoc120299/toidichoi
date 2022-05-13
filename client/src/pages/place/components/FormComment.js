import React from 'react'
import { Avatar, Box, Button, Flex, FormControl, Input } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
const FormComment = () => {
    const auth = useSelector(state => state.auth)
    return (
        <Box my={5} >
            <Flex w={'100%'} >
                <Box mr={5} display={['none', 'block']}>
                    <Avatar size={'md'} name={auth.user.username} src={auth.user.avatar} />
                </Box>
                <Flex
                    direction={'column'}
                >
                    <Box p={3}
                        position={'relative'}
                        bg="gray.100"
                        rounded={'xl'}
                        _before={['', {
                            position: "absolute",
                            top: "25px",
                            right: "auto",
                            bottom: "auto",
                            left: "-12px",
                            content: "''",
                            width: 0,
                            height: 0,
                            borderLeft: "8px solid transparent",
                            borderRight: "8px solid transparent",
                            borderBottom: " 8px solid #f5f5f7",
                            transform: "translatey(-50%) rotate(-90deg)"
                        }]}>
                        <Box mb={5} >
                            <Avatar size='md' name={''} src={''} display={['block', 'none']} />{' '}
                            <Flex justifyContent={'space-between'}>
                                <FormControl>
                                    <Input
                                        border={'unset'}
                                        borderRadius={"unset"}
                                        borderBottom={'1px solid #dddd'}
                                        _focus={{ borderBottom: "1px solid #dddd" }}
                                        placeholder="Hãy viết gì đó"
                                    />
                                </FormControl>
                            </Flex>
                        </Box>
                        <Box>
                            <Flex justifyContent={'end'}>
                                <Button colorScheme={'red'}>Bình luận</Button>
                            </Flex>
                        </Box>
                    </Box>
                </Flex>
            </Flex>

        </Box>
    )
}

export default FormComment