// libraries
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// style
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import BioPerson from './Practice/BioPerson';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='navigation'>
          <Navbar/>
        </div>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/bioPersonSafety' element={<BioPerson/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
