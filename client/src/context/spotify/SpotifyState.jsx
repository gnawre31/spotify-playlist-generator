import { useContext, useReducer } from "react";
import { defaultPlaylists } from "../../testPlaylist";
import SpotifyContext from "./spotifyContext";
import spotifyReducer from "./SpotifyReducer";
import axios from "axios";

export const useSpotify = () => {
  const { state, dispatch } = useContext(SpotifyContext);
  return [state, dispatch];
};

export const getTracks = async (dispatch, playlist, reqConfig) => {
  const params = await convertToParams(playlist.params);
  const endPoint = `https://api.spotify.com/v1/recommendations?${params}`;
  try {
    const res = await axios.get(endPoint, reqConfig);
    dispatch({ type: "GET_TRACKS", payload: res.data.tracks });
  } catch (err) {
    console.log(err);
  }
};
export const updatePlayerState = (dispatch, state) =>
  dispatch({ type: "UPDATE_PLAYER_STATE", payload: state });

const convertToParams = async (input) => {
  let params = "";
  Object.keys(input).forEach((key) =>
    input[key] !== "" ? (params += "&" + key + "=" + input[key]) : ""
  );
  return params;
};

const SpotifyState = (props) => {
  const initialState = {
    tracks: [],
    playlists: defaultPlaylists,
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
