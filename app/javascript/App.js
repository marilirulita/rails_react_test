import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Users from './Users';
import Test from './Test';
import Nav from './Nav';

const App = () => {
  return (

 
      <Router>
      <Nav />
        <Routes>
          <Route path="/" element={ <Users /> } />
          <Route path="/test" element={ <Test /> } />
        </Routes>
      </Router>

  );
}

export default App;
