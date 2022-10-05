import { Box, Center, Avatar, Text, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import { FaCaretRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { formatTime } from '../../components/helper/moment'
import Rate from 'rc-rate';
const
    ReviewHeader = ({ item }) => {
        const auth = useSelector(state => state.auth)
        return (
            <Box
                display={'flex'}
                alignItems={["start", 'center']}
                justifyContent={'flex-start'}
                position='relative'
            >
                <Box  >
                    <Menu >
                        <MenuButton color={"#aaa"} position={'absolute'} right={'5px'} zIndex={99}>
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
                <Box
                    backgroundColor="#eee"
                    backgroundPosition="50%"
                    backgroundSize="cover"
                    backgroundRepeat="no-repeat"
                    flex="0 0 auto"
                    cursor="pointer"
                    width="46px"
                    height="46px"
                    borderRadius="50%"
                    border="none"
                    overflow="hidden"
                >
                    <Box
                        height="100%"
                        width="100%"
                        position="relative"
                    >
                        <Avatar name={item.user.name} src={item.user.avatar} />
                    </Box>
                </Box>

                <Box

                    margin=" 0 30px 0 8px"
                >
                    <Box display={['block', 'flex']} alignItems="center" flexDirection={['column', 'row']}>
                        <Link
                            to={`/profile/${item.user._id}`}
                        >
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent={['start', "center"]}
                                fontSize={["14px", "18px"]}
                                fontWeight="600"
                                letterSpacing=".4px"
                                marginRight="5px"
                                color="#000"
                            >{item.user.username} </Box>

                        </Link>
                        <FaCaretRight style={{
                            color: "#ccc"
                        }} className="desktop" />
                        <Link to={`/place/${item.placeId._id}`} >
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent={["start", "center"]}
                                fontSize="18px"
                                fontWeight="600"
                                letterSpacing=".4px"
                                marginRight="5px"
                                color="#000"
                                textAlign={'left'}
                            >{item.placeId.name}
                            </Box>
                        </Link>
                    </Box>
                    <Center justifyContent={'flex-start'}>
                        <Rate
                            style={{ fontSize: "12px" }}
                            value={item.placeId.rate.rateNumber}
                            allowHalf
                            disabled
                            character={<i className="fas fa-star "></i>} />
                        <Box m={"0 6px"}></Box>
                        <Text as="p"
                            color="#898c95"
                            textTransform={'capitalize'}
                        >
                            {formatTime(item.createdAt)}
                        </Text>
                    </Center>
                </Box>
            </Box >
        )
    }

export default ReviewHeader