
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import RestaurantsDetails  from './components/RestaurantsDetails'
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
          <Header/>
          <main className="py-3">
            <Container>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/restaurants/:id' element={<RestaurantsDetails/>}/>
              </Routes>
            </Container>
          </main>
          <Footer/>
          </Router>
    </div>
  );
}

export default App;
