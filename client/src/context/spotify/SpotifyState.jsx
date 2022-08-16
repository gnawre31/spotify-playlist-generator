import { useContext, useReducer } from "react";
import { defaultPlaylists } from "../../testPlaylist";
import SpotifyContext from "./spotifyContext";
import spotifyReducer from "./SpotifyReducer";
import axios from "axios";

const config = {
  withCredentials: true,
  credentials: "include",
};

export const useSpotify = () => {
  const { state, dispatch } = useContext(SpotifyContext);
  return [state, dispatch];
};

export const getTracks = async (dispatch, playlist, reqConfig) => {
  clearTracks(dispatch);
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


export const getAllPlaylists = async (dispatch) => {
  const playlists = await axios.get("https://spotifyplaynow.herokuapp.com/api/playlist/all", config)
  dispatch({ type: "GET_ALL_PLAYLISTS", payload: playlists.data })
}

export const createPlaylist = async (dispatch, playlist) => {
  try {
    const savedPlaylist = await axios.post("https://spotifyplaynow.herokuapp.com/api/playlist/create", playlist, config)
    dispatch({ type: "CREATE_PLAYLIST", payload: savedPlaylist.data })
  } catch (err) {
    console.log(err)
  }
}

export const deletePlaylist = async (dispatch, id) => {

  // console.log(id)
  try {
    await axios.post("https://spotifyplaynow.herokuapp.com/api/playlist/delete", { _id: id }, config)
    dispatch({ type: "DELETE_PLAYLIST", payload: id })
  } catch (err) {
    console.log(err)
  }
}

const convertToParams = async (input) => {
  let params = "";
  Object.keys(input).forEach((key) =>
    input[key] !== "" ? (params += "&" + key + "=" + input[key]) : ""
  );
  return params;
};

const clearTracks = (dispatch) => {
  dispatch({ type: "CLEAR_TRACKS" });
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
