// // import axios from 'axios';

// const initialState = {
//   users: '',
//   status: 'idle',
//   error: null,
// };

// // const initialState = {};

// const GET_USER = 'GET_USER';
// const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
// const GET_USER_FAILURE = 'GET_USER_FAILURE';

// const getUser = (data) => ({
//   type: GET_USER,
//   payload: data,
// });
// const getUserSuccess = (users) => ({
//   type: GET_USER_SUCCESS,
//   payload: users,
// });
// const getUserFailure = () => ({
//   type: GET_USER_FAILURE,
// });

// export const fetchUsers = () => async (dispatch) => {
//   dispatch(getUser());
//   // try {
//   //   const res = await axios.get('/users');
//   //   const users = res.data.user;
//   //   dispatch(getUserSuccess(users));
//   // } catch (err) {
//   //   dispatch(getUserFailure());
//   // }
//     const res = await fetch('/users');
//     const users = await res.json();
//     if (res.ok) { 
//       dispatch(getUserSuccess(users.user));    
//     } else {
//       dispatch(getUserFailure());
//     }
// };

// // const fetchUsers = () => async (dispatch) => {
// //   dispatch(getUser());
// //   try {
// //     const res = await fetch('/users');
// //     const users = await res.user.json();
// //     console.log(users);
// //     dispatch(getUserSuccess(users));
// //   } catch (err) {
// //     dispatch(getUserFailure());
// //   }
// // };

// export const usersReducer = ( state = initialState, action) => {
//   switch (action.type) {
//     // case GET_USER:
//     //   return action.payload;
//     case GET_USER:
//     return {
//       ...state,
//       status: 'loading',
//     };
//     case GET_USER_SUCCESS:
//     return {
//       ...state,
//       status: 'idle',
//       users: action.payload,
//     };
//     case GET_USER_FAILURE:
//     return {
//       ...state,
//       status: 'error',
//       error: 'Error Fetching Users',
//     };
//     default:
//     return state;
//   }
// };

// // export default usersReducer;

// // export {
// //   getUser, getUserSuccess, getUserFailure, fetchUsers,
// // };

fetch('/users/1', { method: 'DELETE' })
  .then((response) => response.json())
  .then((data) => console.log(data));

  fetch('/users', {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify({name: 'example'}),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });