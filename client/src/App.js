import { BrowserRouter as Router, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import PageRender from './routes/PageRender'
import Footer from './components/Footer'
import './App.css';
import Home from './pages/home';
import { useDispatch } from 'react-redux';
import { getCategories } from './redux/actions/categoriesAction';
import { useEffect } from 'react';
import { getArea } from './redux/actions/areaAction';
import AlertModal from './components/AlertModal';
import { refreshToken } from './redux/actions/authAction';
import { getPlaces } from './redux/actions/placeAction';
function App() {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
    dispatch(getArea())
  }, [])
  useEffect(() => {
    dispatch(refreshToken())
    dispatch(getPlaces())
  }, [dispatch])
  return (
    <Router>
      <AlertModal />
      <Navbar />
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/:page'} component={PageRender} />
      <Route exact path={'/:page/:id'} component={PageRender} />
      <Footer />
    </Router>
  );
}

export default App;
