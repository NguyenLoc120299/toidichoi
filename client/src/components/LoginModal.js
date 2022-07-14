import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    Button,
    Box,
    Flex,
    SimpleGrid,
    Stack,
    Heading,
    FormControl,
    FormLabel,
    Input,
    useColorModeValue,
    InputGroup,
    InputRightElement,
    Image,
    Center,
    Link,
    Text
} from '@chakra-ui/react'
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useDispatch, useSelector } from 'react-redux'
import { login, signup } from '../redux/actions/authAction'
import { ALERT_ACTION } from '../redux/actions/alertAction';
import { isMobile } from 'react-device-detect';
const LoginModal = () => {
    const { alert } = useSelector(state => state)
    const dispatch = useDispatch()
    const [showPassword, setShowPassword] = useState(false);
    const [isSignup, setIsSignup] = useState(false)
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    })
    const handleOnchange = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const onsubmit = async () => {
        try {
            if (isSignup) {
                dispatch(signup(formData))
            }
            else {
                dispatch(login({
                    password: formData.password,
                    email: formData.email
                }))
            }
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <Modal size={isMobile ? 'full' : 'lg'} isOpen={alert.modal} onClose={() => dispatch({
            type: ALERT_ACTION.ALERT,
            payload: {}
        })} isCentered >
            <ModalOverlay />
            <ModalContent maxW={'800px'}  >
                <ModalCloseButton />
                <SimpleGrid columns={[1, 2]} spacingX='40px' spacingY='20px'>
                    <Box bg='red.50' display={['none', 'block']}>
                        <Center h={'100%'} >
                            <Image
                                maxH={'100%'}
                                maxW={"100%"}
                                objectFit={'cover'}
                                src='https://toidicafe.vn/images/coffee-break.svg'
                                alt='toidichoi' />
                        </Center>
                    </Box>
                    <Box>

                        <Flex
                            align={'center'}
                            justify={'center'}>
                            <Stack spacing={5} mx={'auto'} maxW={'lg'} py={12}>
                                <Stack align={'center'}>
                                    <Heading fontSize={['md', '2xl']}>{isSignup ? 'Tạo tài khoản' : 'Đăng nhập tài khoản'}</Heading>
                                </Stack>
                                <Box
                                    rounded={'lg'}
                                    bg={useColorModeValue('white', 'gray.700')}
                                    boxShadow={['none', 'lg']}
                                    p={8}>
                                    <Stack spacing={4}>
                                        {
                                            isSignup &&
                                            <FormControl>
                                                <FormLabel>Tên người dùng</FormLabel>
                                                <Input
                                                    type="text"
                                                    name='username'
                                                    value={formData.username}
                                                    onChange={handleOnchange}
                                                />
                                            </FormControl>
                                        }

                                        <FormControl >
                                            <FormLabel>Email người dùng</FormLabel>
                                            <Input
                                                type="email"
                                                name='email'
                                                value={formData.email}
                                                onChange={handleOnchange}
                                            />
                                        </FormControl>
                                        <FormControl >
                                            <FormLabel>Mật khẩu</FormLabel>
                                            <InputGroup>
                                                <Input
                                                    type={showPassword ? 'text' : 'password'}
                                                    name='password'
                                                    value={formData.password}
                                                    onChange={handleOnchange} />
                                                <InputRightElement h={'full'}>
                                                    <Button
                                                        variant={'ghost'}
                                                        onClick={() =>
                                                            setShowPassword((showPassword) => !showPassword)
                                                        }>
                                                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                                    </Button>
                                                </InputRightElement>
                                            </InputGroup>
                                        </FormControl>
                                        {
                                            isSignup &&
                                            <FormControl >
                                                <FormLabel>Nhập lại mật khẩu</FormLabel>
                                                <InputGroup>
                                                    <Input
                                                        type={showPassword ? 'text' : 'password'}
                                                        name='confirmPassword'
                                                        value={formData.confirmPassword}
                                                        onChange={handleOnchange}
                                                    />
                                                    <InputRightElement h={'full'}>
                                                        <Button
                                                            variant={'ghost'}
                                                            onClick={() =>
                                                                setShowPassword((showPassword) => !showPassword)
                                                            }>
                                                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                                        </Button>
                                                    </InputRightElement>
                                                </InputGroup>
                                            </FormControl>
                                        }

                                        <Stack spacing={10}>
                                            <Button
                                                bg={'red.400'}
                                                color={'white'}
                                                _hover={{
                                                    bg: 'red.500',
                                                }}
                                                isLoading={alert.loading}
                                                onClick={() => onsubmit()}
                                            >
                                                {isSignup ? 'Tạo tài khoản' : 'Đăng nhập'}
                                            </Button>
                                        </Stack>
                                        {!isSignup && <Link color={'red.500'} textAlign="center" fontWeight={'bold'}>Quên mật khẩu?</Link>}
                                        <Text>{isSignup ? 'Bạn đã có tài khoản' : 'Bạn chưa có tài khoản'}
                                            <Link color={'red.500'} fontWeight={"bold"} onClick={() => setIsSignup(!isSignup)}>
                                                {isSignup ? ' Đăng nhập' : ' Tạo tài khoản'}
                                            </Link></Text>
                                    </Stack>
                                </Box>
                            </Stack>
                        </Flex>
                    </Box>
                </SimpleGrid>
            </ModalContent>
        </Modal >
    )
}

export default LoginModal