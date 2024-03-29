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
    const data = {
      tracks: res.data.tracks,
      currPlaylist: playlist._id
    }
    dispatch({ type: "GET_TRACKS", payload: data });
  } catch (err) {
    console.log(err);
  }
};

// export const setTrack = (dispatch, track) => {
//   dispatch({ type: "SET_TRACK", payload: track })
// }


export const updatePlayerState = (dispatch, state) =>
  dispatch({ type: "UPDATE_PLAYER_STATE", payload: state });


export const getAllPlaylists = async (dispatch) => {
  const playlists = await axios.get("http://localhost:5001/api/playlist/all", config)
  dispatch({ type: "GET_ALL_PLAYLISTS", payload: playlists.data })
}

export const createPlaylist = async (dispatch, playlist) => {
  try {
    const savedPlaylist = await axios.post("http://localhost:5001/api/playlist/create", playlist, config)
    dispatch({ type: "CREATE_PLAYLIST", payload: savedPlaylist.data })
  } catch (err) {
    console.log(err)
  }
}

export const deletePlaylist = async (dispatch, id, currPlaylist) => {
  try {
    // delete from DB
    await axios.post("http://localhost:5001/api/playlist/delete", { _id: id }, config)
    dispatch({ type: "DELETE_PLAYLIST", payload: id })

    // check if playlist is currently playing tracks
    // delete if so

    if (id === currPlaylist) clearTracks(dispatch)

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
    currPlaylist: null,
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
