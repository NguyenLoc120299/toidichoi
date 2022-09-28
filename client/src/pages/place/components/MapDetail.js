import { Box, Button, Center, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { getDataAPI } from '../../../untils/fetchData';

import ModalMap from './ModalMap';

const MapDetail = ({ info }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [lng, setLng] = useState(0);
    const [lat, setLat] = useState(0);
    const getMapInfo = async () => {
        const res = await getDataAPI(`map-place/${info._id}`)
        if (res && res.data) {
            setLng(res.data[0].long)
            setLat(res.data[0].lat)
        }
    }
    useEffect(() => {

        getMapInfo()
    }, [info])
    return (
        <Box boxShadow="0 2px 8px rgb(0,0,0,15%)" rounded={'md'} p='6'
            backgroundImage={"url(https://static.tacdn.com/img2/maps/img_map.png)"}
            position='relative'
            backgroundPosition={'center'}
            backgroundRepeat="no-repeat"
            backgroundSize={'cover'}
        >

            <Heading as={'h3'} size='md' mb={5} textAlign={"center"}>Địa điểm cụ thể</Heading>
            <Box 
                position={["unset", "absolute"]}
                display="flex"
                top="50%"
                left="50%"
                transform="translate(-50%,-50"
                justifyContent={'center'}
            >
                <Button

                    fontWeight="700"
                    height="40px"
                    padding="2px 10px"
                    color="#000"
                    backgroundColor="#fff"
                    border="2px solid #000"
                    onClick={onOpen}
                >
                    Xem bản đồ
                </Button>
            </Box>    
            <ModalMap
                info={info}
                isOpen={isOpen}
                onClose={onClose}
                lng={lng}
                lat={lat}
                setLng={setLng}
                setLat={setLat}
            />
        </Box>
    )
}

export default MapDetail