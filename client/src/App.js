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



function App() {
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCategories())
    dispatch(getArea())
  }, [])
  return (
    <Router>
      <Navbar />
      <Route exact path={'/'} component={Home} />
      <Route exact path={'/:page'} component={PageRender} />
      <Route exact path={'/:page/:id'} component={PageRender} />
      <Footer />
    </Router>
  );
}

export default App;
