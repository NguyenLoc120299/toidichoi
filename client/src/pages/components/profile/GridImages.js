import { background, Box, Grid, GridItem, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import ImageLightbox from '../../place/components/ImageLightbox'


const GridImages = ({ images }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [photoIndex, setPhotoIndex] = useState(0)
    const toggleImageLightBox = (index) => {
        setIsOpen(true)
        setPhotoIndex(index)
    }
    if (images.length === 1)
        return (
            <Box>
                <Box h={['400px', '600px']} onClick={() => toggleImageLightBox(0)}>
                    <Image src={images[0]}
                        alt="img0"
                        w={'100%'}
                        h={"100%"}
                        objectFit={"cover"}

                    />
                    <ImageLightbox
                        isOpen={isOpen}
                        photoIndex={photoIndex}
                        setIsOpen={setIsOpen}
                        setPhotoIndex={setPhotoIndex}
                        images={images}
                    />
                </Box>
            </Box>
        )
    if (images.length === 2) return (
        <Box>
            <SimpleGrid columns={2} spacing={1} height={['300px', '600px']}>
                <Box h={'100%'} onClick={() => toggleImageLightBox(0)}>
                    <Image src={images[0]}
                        alt="img0"
                        w={'100%'}
                        h={"100%"}
                        objectFit={"cover"}

                    />
                </Box>
                <Box h={"100%"} onClick={() => toggleImageLightBox(1)}>
                    <Image src={images[1]}
                        alt="img0"
                        w={'100%'}
                        h={"100%"}
                        objectFit={"cover"}

                    />
                </Box>
            </SimpleGrid>
            <ImageLightbox
                isOpen={isOpen}
                photoIndex={photoIndex}
                setIsOpen={setIsOpen}
                setPhotoIndex={setPhotoIndex}
                images={images}
            />
        </Box>
    )
    if (images.length === 3) return (<Box>
        <Grid
            h={['300px', '600px']}
            templateRows='repeat(2, 1fr)'
            templateColumns='repeat(6, 1fr)'
            gap={1}
        >
            <GridItem rowSpan={2} colSpan={4} h={"100%"}>
                <Box h={"100%"} onClick={() => toggleImageLightBox(0)} >
                    <Image src={images[0]}
                        alt="img0"
                        w={'100%'}
                        h={"100%"}
                        objectFit={"cover"}

                    />
                </Box>
            </GridItem>
            <GridItem colSpan={2} h={['150px', '300px']} >
                <Box h={"100%"} onClick={() => toggleImageLightBox(1)} >
                    <Image src={images[1]}
                        alt="img0"
                        w={'100%'}
                        h={"100%"}
                        objectFit={"cover"}

                    />
                </Box>
            </GridItem>
            <GridItem colSpan={2} h={['150px', '300px']}  >
                <Box h={"100%"} onClick={() => toggleImageLightBox(2)} >
                    <Image src={images[2]}
                        alt="img0"
                        w={'100%'}
                        h={"100%"}
                        objectFit={"cover"}

                    />
                </Box>
            </GridItem>
        </Grid>
        <ImageLightbox
            isOpen={isOpen}
            photoIndex={photoIndex}
            setIsOpen={setIsOpen}
            setPhotoIndex={setPhotoIndex}
            images={images}
        />
    </Box>
    )
    if (images.length === 4) return (
        <Box>
            <Grid
                h={['300px', '600px']}
                overflow={'hidden'}
                templateRows='repeat(3, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={1}
            >
                <GridItem rowSpan={3}
                    colSpan={4}
                    onClick={() => toggleImageLightBox(0)}
                    height={'100%'}
                >
                    <Image src={images[0]}
                        alt="img0"
                        w={'100%'}
                        h={"100%"}
                        objectFit={"cover"}

                    />
                </GridItem>
                <GridItem colSpan={1} >
                    <Box
                        height={["150px", '200px']}
                        onClick={() => toggleImageLightBox(1)}
                    >
                        <Image src={images[1]}
                            alt="img0"
                            w={'100%'}
                            h={"100%"}
                            objectFit={"cover"}
                        />
                    </Box>

                </GridItem>
                <GridItem colSpan={1} >
                    <Box
                        height={["150px", '200px']}
                        onClick={() => toggleImageLightBox(2)}
                    >
                        <Image src={images[2]}
                            alt="img0"
                            w={'100%'}
                            h={"100%"}
                            objectFit={"cover"}
                        />
                    </Box>

                </GridItem>
                <GridItem colSpan={1} >
                    <Box
                        height={["150px", '200px']}
                        onClick={() => toggleImageLightBox(3)}
                    >
                        <Image src={images[3]}
                            alt="img0"
                            w={'100%'}
                            h={"100%"}
                            objectFit={"cover"}
                        />
                    </Box>

                </GridItem>
            </Grid>
            <ImageLightbox
                isOpen={isOpen}
                photoIndex={photoIndex}
                setIsOpen={setIsOpen}
                setPhotoIndex={setPhotoIndex}
                images={images}
            />
        </Box>
    )
    else
        return (
            <Box height={['300px', '600px']}>
                <SimpleGrid columns={2} spacing={1} height={['200px', "400px"]}>
                    <Box
                        onClick={() => toggleImageLightBox(0)}
                        height={"100%"}
                        overflow={"hidden"}
                    >
                        <Image src={images[0]}
                            alt="img0"
                            w={'100%'}
                            h={"100%"}
                            objectFit={"cover"}
                        />
                    </Box>
                    <Box
                        onClick={() => toggleImageLightBox(1)}
                        height={"100%"}
                        overflow={"hidden"}
                    >
                        <Image src={images[1]}
                            alt="img0"
                            w={'100%'}
                            h={"100%"}
                            objectFit={"cover"}
                        />
                    </Box>
                </SimpleGrid>
                <SimpleGrid columns={3} spacing={1} mt={1} height={['100px', '200px']}>
                    <Box maxH={['100px', '200px']}
                        onClick={() => toggleImageLightBox(2)}
                    >
                        <Image src={images[2]}
                            alt="img0"
                            w={'100%'}
                            h={"100%"}
                            objectFit={"cover"}
                        />
                    </Box>
                    <Box maxH={['100px', '200px']}
                        onClick={() => toggleImageLightBox(3)}
                    >
                        <Image src={images[3]}
                            alt="img0"
                            w={'100%'}
                            h={"100%"}
                            objectFit={"cover"}
                        />
                    </Box>
                    <Box
                        maxH={['100px', '200px']}
                        position="relative"
                        _before={{
                            content: "''",
                            position: 'absolute',
                            background: 'rgba(0, 0, 0, .4)',
                            width: '100%',
                            height: '100%',
                            left: 0,
                            top: 0,
                            opacity: 0.5

                        }}
                        onClick={() => toggleImageLightBox(4)}
                    >
                        <Image src={images[4]}
                            alt="img0"
                            w={'100%'}
                            h={"100%"}
                            objectFit={"cover"}
                        />
                        <Text
                            position={'absolute'}
                            left='50%'
                            top="50%"
                            transform={'translate(-50%,-50%)'}
                            fontSize={['20px', '36px']}
                            fontWeight='500'
                            color='#fff'
                        >
                            +{images.length}
                        </Text>
                    </Box>
                </SimpleGrid >
                <ImageLightbox
                    isOpen={isOpen}
                    photoIndex={photoIndex}
                    setIsOpen={setIsOpen}
                    setPhotoIndex={setPhotoIndex}
                    images={images}
                />
            </Box >
        )
}

export default GridImages