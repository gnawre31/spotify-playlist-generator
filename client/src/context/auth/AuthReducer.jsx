const AuthReducer = (state, action) => {
  switch (action.type) {
    case "GET_USER":
      return {
        ...state,
        spotifyId: action.payload.data.spotifyId,
        accessToken: action.payload.data.accessToken,
        refreshToken: action.payload.data.refreshToken,
        displayName: action.payload.data.displayName,
        pic: action.payload.data.pic,
      };
    case "SET_ACCESS_TOKEN":
      return {
        ...state,
        accessToken: action.payload,
      };
    case "CLEAR_STATE":
      return {
        spotifyId: null,
        accessToken: null,
        refreshToken: null,
        displayName: null,
        pic: null,
      }

    default:
      return state;
  }
};

export default AuthReducer;
