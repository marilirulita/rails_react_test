import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, usernameActions, searchActions } from './redux/index';
import Search from './Search';
// import { fetchUsers } from './redux/usersReducer';

const Users = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const username = useSelector((state) => state.username.userName);
  const showSearch = useSelector((state) => state.search.showSearch);
  const userNameRef = useRef();

  const showSearchElements = () => {
    dispatch(searchActions.showSearch());
  }

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

  useEffect(() => {
    fetch('/users')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch(usernameActions.getUser(data));
      }
    );
    console.log(username);
  }, [username]);
  return (
    <div>
      { username && <h1>{username}</h1>}
      { isLoggedIn && 
      <div>
        <h3 onClick={showSearchElements} >Search Elements</h3>
      </div>}
      { showSearch && <Search id={1} name={"mar"} price={25} />}
      { !isLoggedIn && 
      <div>
      <form onSubmit={onSubmit} action="/users" method="post">

        <input ref={ userNameRef } type="text" name="user[name]" />
        <input type="submit" value="Create User" />
      </form> 
      </div>}
      
    </div>
  );
}

export default Users;