const initialState = {
  users: [],
  loading: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USERS':
      return {
        ...state,
        loading: true,
      };
    case 'USERS_SUCCESS':
      return {
        ...state,
        users: [...state.users, action.users],
      };

    default:
      return state;
  }
};

export default usersReducer;
