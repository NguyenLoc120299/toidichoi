import { Box, Center, Heading, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import mapboxgl from "mapbox-gl";
import Rate from 'rc-rate/lib/Rate'
mapboxgl.accessToken =
    'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';
const ModalMap = ({ isOpen, onClose, info, lng, lat, setLng, setLat }) => {
    const mapContainerRef = useRef();
    const map = useRef(null);
    const [zoom, setZoom] = useState(16)
    const rateReview = () => {
        return (
            <Rate
                style={{ fontSize: "50px" }}
                value={5}
                character={<i className="fas fa-star"></i>}
            />
        )
    }



    useEffect(() => {
        if (mapContainerRef.current) { // initialize map only once
            const map = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: "mapbox://styles/mapbox/streets-v11",
                center: [lng, lat],
                zoom: zoom
            });
            const el = document.createElement('div');
            el.className = 'marker';
            const marker1 = new mapboxgl.Marker(el)
                .setLngLat([lng, lat])
                .addTo(map);

            const popup = new mapboxgl.Popup({ closeOnClick: false })
                .setLngLat([lng, lat])
                .setHTML(`<div class="popup_map">
                    <div class="popup_avt">
                        <img src="${info.images ? info.images[0] : ''}" alt="" />
                    </div>
                    <div class="popup_info">
                        <h3>${info.name}</h3>
                        <div>
                            ${info.address}
                        </div>
                        <div>
                            ${(info.rate ? info.rate.rateNumber : 0).toFixed(1)} 
                            <i class="fas fa-star" style="color:#e03"></i> - 
                            ${info.rate ? info.rate.turnNumber : 0} người đánh giá
                        </div>
                        <div>
                        </div>
                    </div>
                </div>`)
                .setMaxWidth(500)
                .addTo(map);


            // Add navigation control (the +/- zoom buttons)
            map.addControl(new mapboxgl.NavigationControl(), 'top-right');
            map.addControl(new mapboxgl.FullscreenControl(), 'top-right');
            map.addControl(new mapboxgl.GeolocateControl({

            }), 'top-right')
            // map.on('move', () => {
            //     setLng(map.getCenter().lng.toFixed(4));
            //     setLat(map.getCenter().lat.toFixed(4));
            //     setZoom(map.getZoom().toFixed(2));
            // });

        }
        // Clean up on unmount 
        // return () => map.remove();
    });
    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on("move", () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <>
            <div className='modal_map' style={isOpen ? { display: 'block' } : { display: 'none' }}>
                <div className='modal_map_wrapper'>
                    <div className='map_container'>
                        <div className='map_header'>
                            <div className='map_header_info'>
                                <h1>
                                    <i className="fas fa-map-marker-alt"></i>
                                    {info.name}
                                </h1>
                            </div>
                            <div className='map_header_close' onClick={onClose}>
                                <i className="fas fa-times"></i>
                            </div>
                        </div>
                        <div className='map_content'>
                            <div className='map-container' ref={mapContainerRef} style={{ height: "100%", width: "100%" }} />
                        </div>

                    </div>

                </div>

            </div>
            {/* <Modal isOpen onClose={onClose} isCentered size={'6xl'}

            >
                <ModalOverlay />
                <ModalContent >
                    <ModalHeader>
                        <Center>
                            <Heading as="h4">{info.name}</Heading></Center>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                      

                    </ModalBody>


                </ModalContent>
            </Modal> */}
        </>

    )
}

export default ModalMap