import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, usernameActions } from './redux/index';
import Search from './Search';
// import { fetchUsers } from './redux/usersReducer';

const Users = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const username = useSelector((state) => state.username.userName);
  const userNameRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(usernameActions.getUser(userNameRef.current.value));
    if (username) {
      console.log(username);
      dispatch(authActions.login());
    }
    // dispatch(authActions.login());
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
      { username && <h1>{username}</h1>}
      { isLoggedIn && <Search id={1} name={"mar"} price={25} /> }
      { !isLoggedIn && 
      <form onSubmit={onSubmit} action="/users" method="post">

        <input ref={ userNameRef } type="text" name="user[name]" />
        <input type="submit" value="Create User" />
      </form> }
      
    </div>
  );
}

export default Users;