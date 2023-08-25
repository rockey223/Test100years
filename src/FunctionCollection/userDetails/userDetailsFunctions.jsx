
const userDetailsFunction = (state, action) => {
  switch (action.type) {

    case "SET_LOADING":
      return{
        ...state,
        isLoading: true
      }
    case "UNSET_lOADING":
      return{
        ...state,
        isLoading: false
      }

    case "GET_MY_INFO":
      return {
        ...state,
        myInfo: action.payload.user,
        isloggedIn: true,
        initialName: action.payload.userName,
      };

    case "GET_MY_INFO_ERROR":
      return {
        ...state,
        isloggedIn: false,
      };

    case "LOGIN":
      const loginInitial = action.payload.userName;

      return {
        ...state,
        isLoading: false,
        isloggedIn: true,
        myInfo: action.payload.user,
        initialName: loginInitial,
      };

    case "SIGNUP":
      const signupInitial = action.payload.userName;
      return {
        ...state,
        isLoading: false,
        isloggedIn: true,
        myInfo: action.payload.user,
        initialName: signupInitial,
      };

    case "LOGOUT":
      return {
        ...state,
        isloggedIn: false,
        myInfo: action.payload,
      };

    default:
      return state;
  }
};

export default userDetailsFunction;
