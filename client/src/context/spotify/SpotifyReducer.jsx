const SpotifyReducer = (state, action) => {
  switch (action.type) {
    case "GET_TRACKS":
      return {
        ...state,
        tracks: action.payload,
      };
    default:
      return state;
  }
};

export default SpotifyReducer;
