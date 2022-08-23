import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/index';
import Home from './screens/Home';
import Plan from './screens/Plan';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/plan' element={<Plan />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
