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
    try {
    fetch('/users')
      .then((res) => res.json())
      .then((data) => {
        data.forEach(user => {
          if (user.name === userNameRef.current.value) {
            dispatch(usernameActions.getUser(userNameRef.current.value));
            dispatch(authActions.login());
          } else {
            console.log("No user found");
          }
        });
      }
    );} catch (err) {
      console.log(err);
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