import { Box } from '@chakra-ui/react'
import React from 'react'
import ReactPhotoGrid from 'react-photo-grid'
const ReviewBody = ({ item }) => {
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
                    <Box mt={5} w={"700px"}>
                        <ReactPhotoGrid
                            data={item.images}
                            gridSize="500x500"
                        />
                    </Box>
                }


            </Box>
        </Box>
    )
}

export default ReviewBody