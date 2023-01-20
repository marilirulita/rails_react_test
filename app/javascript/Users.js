import React, { useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchActions, authActions, fetchUsers } from './redux/index';
import Search from './Search';
import Notification from './Notification';

const Users = () => {
  const dispatch = useDispatch();
  const userName = useSelector((state) => state.username.userName);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const showSearch = useSelector((state) => state.search.showSearch);
  const alert = useSelector((state) => state.alert.alert);
  const userNameRef = useRef();
  const createUserNameRef = useRef();

  useEffect(() => {
    console.log("User name: ", userName);
  }, [userName]);

  const showSearchElements = () => {
    dispatch(searchActions.showSearch());
  }

  const logOut = () => {
    dispatch(authActions.logout());
  }

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchUsers(userNameRef.current.value));
  };

  const createUser = (e) => {
    e.preventDefault();
    const userName = createUserNameRef.current.value;
    const formData = new FormData();
    formData.append('user[name]', userName);
    fetch('/users', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Success crating a new user")
        console.log(data);
        // dispatch(fetchUsers());
      });
  };

  return (
    <div>
      { alert && <Notification type={alert.type} mess={alert.message} />
      }
      { isLoggedIn && 
      <div>
        <h3 onClick={showSearchElements} >Search Elements</h3>
        <button onClick={logOut} >Log out</button>
        { showSearch && <Search id={1} name={userName} price={25} />}
      </div>
           }
 
      { !isLoggedIn && 
      <div>
        <h3>Log in to save search</h3>
      <form onSubmit={onSubmit} action="/users" method="post">
        <input ref={ userNameRef } type="text" name="user[name]" />
        <input type="submit" value="Log in" />
      </form>

      <h3>Or you can create a new user</h3>
      <form onSubmit={createUser} action="/users" method="post">
        <input ref={ createUserNameRef } type="text" name="user[name]" />
        <input type="submit" value="Create" />
      </form>

      </div>}
    </div>
  );
}

export default Users;