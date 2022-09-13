import { Avatar, Box, Button, Center, Flex, Image, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { formatTime } from '../pages/components/helper/moment'
import style from './navbar.module.css'
import { isReadNotify } from '../redux/actions/notifyAction'
export const Notification = ({ notifyNotRead }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const auth = useSelector(state => state.auth)
    const { data } = useSelector(state => state.notify)
    const dispatch = useDispatch()
    const handleIsRead = (msg) => {
        dispatch(isReadNotify({ msg, auth }))
    }
    const handleIsreadAl = () => {
        data.forEach(element => {
            if (!element.isRead) {
                handleIsRead(element)
            }
        });
    }
    return (
        <>
            <Box position={'relative'} >
                <Button borderRadius={'50%'} mr="3" bg={'transparent'}
                    _focus={{
                        boxShadow: 'unset',
                        background: 'unset'
                    }}
                    _active={{
                        background: 'unset'
                    }}
                    _hover={{
                        background: 'unset'
                    }}
                    onClick={onOpen}
                >
                    <Image src='/assets/img/bell2.svg' alt='' className={style.icon} w={'20px'} />
                </Button>
                {
                    notifyNotRead.length > 0 &&
                    <div className='notification'>
                        {notifyNotRead.length}
                    </div>
                }
            </Box>
            <Modal isOpen={isOpen} onClose={onClose} size={"sm"}>
                <ModalOverlay />
                <ModalContent left={'35%'} right={"20px"} maxHeight={'90vh'} overflow={'scroll'}>
                    <ModalHeader borderBottom={'1px solid #dddd'}>
                        <Flex justifyContent={'space-between'}>
                            <Text fontSize={'16px'}>Thông báo</Text>
                            <Flex alignItems={'center'} gap={2} cursor={"pointer"}>
                                <i className="fas fa-check-double" style={{ fontSize: '16px' }} />
                                <span style={{ fontSize: '16px', cursor: 'pointer' }} onClick={handleIsreadAl}>Đánh dấu đã đọc</span>
                            </Flex>
                        </Flex>
                    </ModalHeader>
                    <ModalBody p={'10px 5px'}>
                        {
                            data && data.length > 0 ? data.map(item => (
                                <Box background={item.isRead ? "#fff" : "#dddd"}
                                    padding='15px 10px'
                                    cursor={'pointer'}
                                    borderRadius={'5px'}
                                    _hover={{
                                        background: '#dddd',

                                    }}
                                    onClick={() => handleIsRead(item)}
                                >
                                    <Flex gap={5}>
                                        <Avatar size={'md'} name={item?.user.username} src={item?.user.avatar} />
                                        <Box>
                                            <Text>
                                                <span
                                                    style={{ fontWeight: 'bold' }}
                                                >{item?.user.username}</span> {item.text}
                                            </Text>
                                            <Text>
                                                {formatTime(item.createdAt)}
                                            </Text>
                                        </Box>
                                    </Flex>

                                </Box>
                            ))
                                :
                                <Center py={3}>Không có thông báo</Center>
                        }
                    </ModalBody>
                </ModalContent>
            </Modal>

        </>

    )
}
