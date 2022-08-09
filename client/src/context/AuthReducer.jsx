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
    default:
      return state;
  }
};

export default AuthReducer;
