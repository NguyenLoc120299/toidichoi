import { Box, Image, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import Rate from 'rc-rate'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min'
import FormNewComment from '../profile/FormNewComment'
import ListReviewReply from '../profile/ListReviewReply'
import ReviewAction from '../profile/ReviewAction'
import ReviewBody from '../profile/ReviewBody'
import ReviewHeader from '../profile/ReviewHeader'
import { Link } from 'react-router-dom'
const ExploreFee = ({ item }) => {
    const auth = useSelector(state => state.auth)
    const [setLsComment, setShowLsComment] = useState(false)
    const { pathname } = useLocation()
    return (
        <Box
            padding="12px 16px"
            marginBottom="20px"
            backgroundColor="#fff"
            borderRadius="10px"
            className='box-shadow'
            position={'relative'}
        >
            <Box position={'absolute'} right={5} zIndex={99}>
                <Menu >
                    <MenuButton color={"#aaa"}>
                        <i className="fas fa-ellipsis-h"></i>
                    </MenuButton>
                    <MenuList>
                        <MenuItem
                            onClick={() => {
                                navigator.clipboard.writeText(`${window.location.host}/review/${item._id}`);
                            }}
                        ><i className="fas fa-link" style={{ marginRight: '10px' }}></i>Sao chép liên kết</MenuItem>
                        <MenuItem><i className="far fa-flag" style={{ marginRight: '10px' }}></i>Báo cáo</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <ReviewHeader item={item} />
            <ReviewBody item={item} />
            {
                pathname !== '/explore' &&
                <Box
                    display="flex"
                    position="relative"
                    marginTop="16px"
                    marginBottom="10px"
                    border="1px solid #d9d9d9"
                    borderRadius="10px"
                    overflow="hidden"
                >
                    <Box
                        flexShrink="0"
                        width={["100px", "150px"]}
                        minHeight={["100px", "150px"]}
                        maxHeight={["100px", "150px"]}
                        padding="10px"
                        borderRadius="10px"
                        overflow={'hidden'}
                    >
                        <Link to={`/place/${item.placeId._id}`}>
                            <Image src={item.placeId.images[0]} w={"100%"} h={"100%"} />
                        </Link>
                    </Box>
                    <Box
                        flex="1 1"
                        padding="16px"
                        overflow="hidden"
                    >
                        <Text fontSize={["14px", '18px']} fontWeight={700} color={"#000"} overflow="hidden"
                            whiteSpace="nowrap"
                            textOverflow="ellipsis">{item.placeId.name}</Text>
                        <Text overflow="hidden"
                            whiteSpace="nowrap"
                            textOverflow="ellipsis" >{item.placeId.address}</Text>
                        <Rate value={5} allowHalf disabled character={<i className="far fa-star"></i>} />
                    </Box>
                </Box>
            }
            <ReviewAction item={item} />
            {
                auth.user && <FormNewComment item={item} />
            }
            {
                item.comments.length > 0 && !setLsComment && <Box
                    fontWeight="500"
                    color="#000"
                    my={3}
                    textAlign="center"
                    cursor={"pointer"}
                    onClick={() => setShowLsComment(!setLsComment)}
                >Xem tất cả {item.comments.length} bình luận</Box>
            }
            {
                setLsComment && <ListReviewReply item={item} />
            }
            {
                setLsComment && <Box
                    fontWeight="500"
                    color="#000"
                    my={3}
                    textAlign="center"
                    cursor={"pointer"}
                    onClick={() => setShowLsComment(!setLsComment)}
                >Ẩn tất cả bình luận</Box>
            }

        </Box >

    )
}

export default ExploreFee