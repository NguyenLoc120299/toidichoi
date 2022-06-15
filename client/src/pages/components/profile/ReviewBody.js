import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'
import ReactPhotoGrid from 'react-photo-grid'
import ImageLightbox from '../../place/components/ImageLightbox'
import ImageSwipper from '../../place/components/ImageSwipper'
const ReviewBody = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)
    const toggleImageLightBox = () => {
        setIsOpen(true)
    }
    return (
        <Box
            p={"4px 2px"}
        >
            <Box
                color="inherit"
                whiteSpace="pre-line"
                fontSize="16px"
                lineHeight="24px"
                wordBreak="break-word"
            >
                <Box
                    overflowWrap="break-word"
                    textAlign={'left'}
                >
                    {item.content}
                </Box>
                {
                    item.images.length > 0 &&
                    <Box mt={5} display={['none', 'block']}>
                        <ReactPhotoGrid
                            onImageClick={() => toggleImageLightBox()}
                            data={item.images}
                            gridSize="500x500"
                        />
                        <ImageLightbox
                            isOpen={isOpen}
                            photoIndex={photoIndex}
                            setIsOpen={setIsOpen}
                            setPhotoIndex={setPhotoIndex}
                            images={item.images}
                        />
                    </Box>
                }
                {item.images.length > 0 &&
                    <Box mt={5} display={['block', 'none']}>
                        <ImageSwipper
                            images={item.images}
                        />
                    </Box>
                }


            </Box>
        </Box>
    )
}

export default ReviewBody