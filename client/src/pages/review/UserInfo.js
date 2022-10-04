import { Avatar, Box, Button, Flex, SkeletonCircle, SkeletonText, Text } from '@chakra-ui/react'
import React from 'react'
import { BoxCustom } from '../components/explore/ExplorerSidebar'
import { formatDay } from '../components/helper/moment'

const UserInfo = ({ user }) => {
    return (

        <BoxCustom>
            <Flex
                display="Flex"
                alignItems="center"
                justifyContent="flex-start"
                position="relativeFlex"
                padding="4px 4px 16px"
                borderBottom="1px solid #eee"
            >
                {
                    user ? <Avatar src={user?.avatar} name={user?.username} size={'lg'} />
                        :
                        <SkeletonCircle w={'50px'} height={'50px'} />
                }

                <Box
                    margin="0 10px"
                    padding="2px 0"
                    flexGrow="1"
                    overflow="hidden"
                >
                    {
                        user ?
                            <>
                                <Text as={'h3'}
                                    fontSize="18px"
                                    fontWeight="600"
                                    letterSpacing=".4px"
                                    marginRight="5px"
                                    color="#000"
                                >{user?.username}</Text>
                                <Text as={'h5'} color={'#898c95'}>{formatDay(user?.createdAt) || 0}</Text>
                            </>
                            :
                            <SkeletonText my='4' noOfLines={2} spacing='4' />

                    }

                </Box>
                <Button>Follow</Button>
            </Flex>
            <Flex
                justifyContent="space-between"
                padding="16px 4px"
            >

            </Flex>
        </BoxCustom>
    )
}

export default UserInfo