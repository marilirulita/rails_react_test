import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './redux/usersReducer';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((store) => store.users);
  const userNameRef = useRef();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userNameRef.current.value)
    // const userName = userNameRef.current.value;
    // const formData = new FormData();
    // formData.append('user[name]', userName);
    // fetch('/users', {
    //   method: 'POST',
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     dispatch(fetchUsers());
    //   });
  };


  return (
    <div>
      <h1>{users.users}</h1>
      <form onSubmit={onSubmit} action="/users" method="post">
        <input ref={ userNameRef } type="text" name="user[name]" />
        <input type="submit" value="Create User" />
      </form>
    </div>
  );
}

export default Users;