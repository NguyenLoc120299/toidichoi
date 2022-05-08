import { Button, Center, Container, Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Area from './components/area'
import Banner from './components/banner/Banner'
import Categories from './components/categories/Categories'
import Trending from './components/trending/Trending'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getCategories } from '../redux/actions/categoriesAction'
import { getArea } from '../redux/actions/areaAction'
import { getPlaces } from '../redux/actions/placeAction'
const Home = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCategories())
        dispatch(getArea())
        dispatch(getPlaces())
    }, [dispatch])

    return (
        <Container maxW={"100%"} px="1.5">
            <Banner />
            <Categories />
            <Area />
            <Trending />
            <Container maxW={'1200px'}>
                <Flex justifyContent={'space-between'} direction={['column', 'row']}>
                    <div>
                        <img src='/assets/img/location.png' alt='' />
                    </div>
                    <div style={{
                        display: "flex", justifyContent: 'center', alignItems: 'center'
                    }}>
                        <div>
                            <p className={'title'}>Chúng tôi có đang bỏ lỡ địa điểm nào bạn biết không ?</p>
                            <Center py={5}>
                                <Button colorScheme='red' size='lg'>
                                    <Link to='/add-place'>
                                        Thêm địa điểm
                                    </Link>
                                </Button>
                            </Center>
                        </div>
                    </div>
                </Flex>
            </Container>
        </Container >
    )
}

export default Home