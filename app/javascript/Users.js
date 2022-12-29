import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './redux/usersReducer';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUsers());
    console.log(users);
  }, [dispatch]);

  return (
    <div>
      <h1>Users</h1>
      <form action="/users" method="post">
        <input type="text" name="user[name]" />
        <input type="submit" value="Create User" />
      </form>
      {/* <div> {users} </div> */}
    </div>
  );
}

export default Users;