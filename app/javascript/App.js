import React from 'react';
// import Users from './Users';

const App = () => {
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

export default App;
