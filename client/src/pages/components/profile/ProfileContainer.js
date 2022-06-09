import { Box, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { BoxProfile } from './styled'

const ProfileContainer = () => {
    return (
        <Grid
            templateColumns={'repeat(3,1fr)'}
            gap={6}
        >
            <GridItem colSpan={1}>
                <BoxProfile>
                    <h1>aaaaaaa</h1>
                </BoxProfile>
            </GridItem>
            <GridItem colSpan={2}>
                <BoxProfile>

                </BoxProfile>
            </GridItem>
        </Grid>
    )
}

export default ProfileContainer