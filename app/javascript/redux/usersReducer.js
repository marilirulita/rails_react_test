import axios from 'axios';

const initialState = {
  users: '',
  status: 'idle',
  error: null,
};

export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

const getUser = () => ({
  type: GET_USER,
});
const getUserSuccess = (users) => ({
  type: GET_USER_SUCCESS,
  payload: users,
});
const getUserFailure = () => ({
  type: GET_USER_FAILURE,
});

const fetchUsers = () => async (dispatch) => {
  dispatch(getUser());
  try {
    const res = await axios.get('/users');
    const users = res.data.user;
    dispatch(getUserSuccess(users));
  } catch (err) {
    dispatch(getUserFailure());
  }
};

// const fetchUsers = () => async (dispatch) => {
//   dispatch(getUser());
//   try {
//     const res = await fetch('/users');
//     const users = await res.user.json();
//     console.log(users);
//     dispatch(getUserSuccess(users));
//   } catch (err) {
//     dispatch(getUserFailure());
//   }
// };

const usersReducer = ( state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
    return {
      ...state,
      status: 'loading',
    };
    case GET_USER_SUCCESS:
    return {
      ...state,
      status: 'idle',
      users: action.payload,
    };
    case GET_USER_FAILURE:
    return {
      ...state,
      status: 'error',
      error: 'Error Fetching Users',
    };
    default:
    return state;
  }
};

export default usersReducer;

export {
  getUser, getUserSuccess, getUserFailure, fetchUsers,
};