import { Box, Button, Flex, Link, Wrap, WrapItem } from '@chakra-ui/react'
import { async } from '@firebase/util'
import React from 'react'
import { FaFacebook, FaInstagram, FaEllipsisH } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { checkLogin } from '../../../redux/actions/authAction'
import { patchDataAPI } from '../../../untils/fetchData'
const ProfileNavigation = ({ user, toggleCallBack }) => {
    console.log("check follow user", user);
    const history = useHistory()
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const follow = async () => {
        try {
            if (dispatch(checkLogin(auth))) {
                await patchDataAPI(`user/${user?._id}/follow`, null, auth.token)
            }
        } catch (error) {
            console.log(error);
        }
    }
    const unFollow = async () => {
        try {
            if (dispatch(checkLogin(auth))) {
                await patchDataAPI(`user/${user?._id}/unfollow`, null, auth.token)
            }
        } catch (error) {
            console.log(error);
        }
    }
    const onSubmitFollow = async () => {
        if (isFollow())
            await unFollow()
        else
            await follow()
        toggleCallBack()
    }
    const isFollow = () => {
        if (auth && auth.user) {
            const check = user?.followers.filter(item => item === auth?.user._id)
            if (check.length > 0) return true
        }
        return false
    }
    return (
        <Box
            background={'#fff'}
            boxShadow="0 2px 2px 0 rgb(189 171 171 / 20 %)"

        >
            <Box
                display={'flex'}
                justifyContent={"space-between"}
                borderTop={["none", "1px solid #ddd"]}
                flexDirection={["column-reverse", "row"]}
            >
                <Wrap
                    borderTop={['1px solid #ddd', 'none']}
                    borderBottom={['1px solid #ddd', 'none']}
                    margin={"15px 0"}
                    position={["sticky", 'relative']}
                    top={0}
                    className="list___wrapper"
                >
                    <WrapItem>
                        <Link href='#'
                            className='active'
                            display="block"
                            fontWeight="500"
                            padding="10px 14px"
                            color="#000"
                            _focus={{ border: 'unset' }}
                        >
                            Đánh giá
                        </Link>
                    </WrapItem>
                    <WrapItem>
                        <Link href='#'
                            display="block"
                            fontWeight="500"
                            padding="10px 14px"
                            color="#000"
                            _focus={{ border: 'unset' }}
                        >
                            Đã lưu
                        </Link>
                    </WrapItem>
                    <WrapItem>
                        <Link href='#'
                            display="block"
                            fontWeight="500"
                            padding="10px 14px"
                            color="#000"
                            _focus={{ border: 'unset' }}
                        >
                            {user?.followers.length} Người theo dõi 
                        </Link>
                    </WrapItem>
                    <WrapItem>

                        <Link href='#'
                            display="block"
                            fontWeight="500"
                            padding="10px 14px"
                            color="#000"
                            _focus={{ border: 'unset' }}
                        >
                            {user?.following.length} Đang theo dõi
                        </Link>
                    </WrapItem>
                </Wrap>
                <Wrap className='m_menu' display={'flex'} justifyContent={'center'}>
                    <WrapItem>
                        {
                            auth && auth?.user && auth.user._id === user?._id ?
                                <Button
                                    padding="6px 18px"
                                    marginLeft=" 6px"
                                    marginTop="6px"
                                    borderRadius="6px"
                                    fontWeight="500"
                                    color="#000"
                                    background="#efefef"
                                    onClick={() => history.push(`/profile-edit/${user._id}`)}
                                >
                                    Chỉnh sửa
                                </Button>
                                :
                                <Button
                                    padding="6px 18px"
                                    marginLeft=" 6px"
                                    marginTop="6px"
                                    borderRadius="6px"
                                    fontWeight="500"
                                    color="#000"
                                    background="#efefef"
                                    onClick={onSubmitFollow}
                                >
                                    {isFollow() ? "Đang theo dõi" : "Theo dõi"}
                                </Button>
                        }

                    </WrapItem>
                    <WrapItem>
                        <Button
                            padding="6px 18px"
                            marginLeft=" 6px"
                            marginTop="6px"
                            borderRadius="6px"
                            fontWeight="500"

                        >
                            <FaFacebook />
                        </Button>

                    </WrapItem>
                    <WrapItem>
                        <Button
                            padding="6px 18px"
                            marginLeft=" 6px"
                            marginTop="6px"
                            borderRadius="6px"
                            fontWeight="500"
                        >
                            <FaInstagram />
                        </Button>

                    </WrapItem>
                    <WrapItem>
                        <Button
                            padding="6px 18px"
                            marginLeft=" 6px"
                            marginTop="6px"
                            borderRadius="6px"
                            fontWeight="500"
                        >
                            <FaEllipsisH />
                        </Button>

                    </WrapItem>
                </Wrap>

            </Box>
        </Box>
    )
}

export default ProfileNavigation