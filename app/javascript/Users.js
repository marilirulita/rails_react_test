import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchActions, fetchUsers } from './redux/index';
import Search from './Search';
import Notification from './Notification';

const Users = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const showSearch = useSelector((state) => state.search.showSearch);
  const alert = useSelector((state) => state.alert.alert);
  const userNameRef = useRef();

  const showSearchElements = () => {
    dispatch(searchActions.showSearch());
  }

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchUsers(userNameRef.current.value));

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
      { alert && <Notification type={alert.type} mess={alert.message} />
      }
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