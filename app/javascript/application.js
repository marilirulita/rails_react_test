// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
// import Users from './Users';


ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  </Router>,
  document.getElementById('root'),
);