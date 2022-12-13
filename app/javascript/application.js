// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return (
    <div>
      <h1>react</h1>
      <form action="/users" method="post">
        <input type="text" name="user[name]" />
        <input type="submit" value="Create User" />
      </form>
      <div></div>
    </div>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root'),
);