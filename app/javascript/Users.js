import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, usernameActions } from './redux/index';
// import { fetchUsers } from './redux/usersReducer';

const Users = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.username.userName);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  console.log(isLoggedIn);
  const userNameRef = useRef();

  // useEffect(() => {
    
  // }, [dispatch]);

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userNameRef.current.value)
    dispatch(usernameActions.getUser(userNameRef.current.value));
    dispatch(authActions.login());
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
      { isLoggedIn && <h1>{userName}</h1> }
      { !isLoggedIn && 
      <form onSubmit={onSubmit} action="/users" method="post">
        <input ref={ userNameRef } type="text" name="user[name]" />
        <input type="submit" value="Create User" />
      </form> }
      
    </div>
  );
}

export default Users;