import React from 'react'
import Lightbox from 'react-image-lightbox'

const ImageLightbox = ({ isOpen, images, photoIndex, setIsOpen, setPhotoIndex }) => {
    return (
        <>
            {
                isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setIsOpen(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % images.length)}
                    />
                )
            }
        </>
    )
}

export default ImageLightbox