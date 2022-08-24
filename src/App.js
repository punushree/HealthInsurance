import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/index';
import Home from './screens/Home';
import Plan from './screens/plan/Plan';
import Renew from './screens/Renew';
import Buy from './screens/Buy';
import Contact from './screens/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/plan' element={<Plan />} />
          <Route path='/renew' element={<Renew />} />
          <Route path='/plan' element={<Buy />} />
          <Route path='/plan' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
