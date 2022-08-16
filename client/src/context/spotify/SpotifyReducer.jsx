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
    case "GET_ALL_PLAYLISTS":
      return {
        ...state,
        playlists: action.payload
      }
    case "CREATE_PLAYLIST":
      return {
        ...state,
        playlists: [...state.playlists, action.payload]
      }
    case "DELETE_PLAYLIST":
      return {
        ...state,
        playlists: state.playlists.filter(p => p._id !== action.payload)
      }
    default:
      return state;
  }
};

export default SpotifyReducer;
