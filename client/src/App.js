import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import PageRender from './routes/PageRender'
import Footer from './components/Footer'
import './App.css';
import Home from './pages/home';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AlertModal from './components/AlertModal';
import { refreshToken } from './redux/actions/authAction';
import { getCategories } from './redux/actions/categoriesAction';
import { getArea } from './redux/actions/areaAction';
import { getPlaces } from './redux/actions/placeAction';
import MenuMobile from './components/MenuMobile';
import { Box } from '@chakra-ui/react';
import io from 'socket.io-client'
import { GLOBALTYPES } from './redux/actions/globalTypes';
import SocketClient from './socketClient';
import { getNotifies } from './redux/actions/notifyAction';
import ModalSearch from './pages/components/banner/ModalSearch';
function App() {
  const dispatch = useDispatch()
  const { token } = useSelector(state => state.auth)
  useEffect(() => {
    dispatch(refreshToken())
    const socket = io()
    dispatch({ type: GLOBALTYPES.SOCKET, payload: socket })
    return () => socket.close()
  }, [dispatch])
  useEffect(() => {
    dispatch(getCategories())
    dispatch(getArea())
    dispatch(getPlaces())

  }, [dispatch, token])
  useEffect(() => {
    if (token)
      dispatch(getNotifies(token))
  }, [token])
  useEffect(() => {
    window.gapi.load('client:auth2', function () {
      window.gapi.auth2.init({
        client_id:
          '180965278338-u7i3iha47praso9nhlfqc1gosopu18te.apps.googleusercontent.com',
      });
    });
  }, []);

  return (
    <Router>
      <AlertModal />
      <MenuMobile />
      <ModalSearch />
      <Box pb={['100px', 0]}>
        <Navbar />
        <Route exact path={'/'} component={Home} />
        <Route exact path={'/:page'} component={PageRender} />
        <Route exact path={'/:page/:id'} component={PageRender} />
        {token && <SocketClient />}
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
