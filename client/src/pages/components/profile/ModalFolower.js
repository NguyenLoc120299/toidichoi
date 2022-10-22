import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React from 'react'
import UserItem from '../explore/UserItem'

const ModalFolower = ({ isOpen, onClose, followers }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textAlign={'center'} borderBottom='1px solid #ccc'>Người theo dõi</ModalHeader>
                <ModalCloseButton _focus={{

                    background: "transparent",
                    boxShadow: 'unset'
                }} />
                <ModalBody>
                    {
                        followers && followers.map((item) => (
                            <UserItem item={item} />
                        ))
                    }
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default ModalFolower