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
        currPlaylist: action.payload.currPlaylist,
        tracks: action.payload.tracks,
      };
    // case "SET_TRACK":
    //   return {
    //     ...state,
    //     playerState: { ...state.playerState, track: action.payload }
    //   }
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
        currPlaylist: state.currPlaylist === action.payload ? null : state.currPlaylist,
        playlists: state.playlists.filter(p => p._id !== action.payload)
      }
    default:
      return state;
  }
};

export default SpotifyReducer;
