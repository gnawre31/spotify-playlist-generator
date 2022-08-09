import { useContext, useReducer } from "react";
import SpotifyContext from "./spotifyContext";
import spotifyReducer from "./SpotifyReducer";

export const useSpotify = () => {
  const { state, dispatch } = useContext(SpotifyContext);
  return [state, dispatch];
};

const SpotifyState = (props) => {
  const initialState = {
    tracks: [],
    playlists: [],
    playerState: null,
  };
  const [state, dispatch] = useReducer(spotifyReducer, initialState);
  return (
    <SpotifyContext.Provider value={{ state, dispatch }}>
      {props.children}
    </SpotifyContext.Provider>
  );
};

export default SpotifyState;
