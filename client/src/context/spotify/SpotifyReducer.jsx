const SpotifyReducer = (state, action) => {
  switch (action.type) {
    case "CLEAR_TRACKS":
      return {
        ...state,
        tracks: [],
      };
    case "GET_TRACKS":
      return {
        ...state,
        tracks: action.payload,
      };
    case "UPDATE_PLAYER_STATE":
      return {
        ...state,
        playerState: action.payload,
      };
    default:
      return state;
  }
};

export default SpotifyReducer;
