import React from 'react';

const Users = () => {
  return (
    <div>
      <h1>Users</h1>
      <form action="/users" method="post">
        <input type="text" name="user[name]" />
        <input type="submit" value="Create User" />
      </form>
    </div>
  );
}

export default Users;