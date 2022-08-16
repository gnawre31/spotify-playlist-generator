import { useContext, useEffect, useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./AuthReducer";
import axios from "axios";
import QueryString from "qs";
import { getAllPlaylists, useSpotify } from "../spotify/SpotifyState";


export const useAuth = () => {
  const { state, dispatch } = useContext(AuthContext);
  return [state, dispatch];
};

export const reqConfig = async (state, dispatch) => {
  await refreshAccessToken(state, dispatch);
  const config = {
    headers: {
      Authorization: "Bearer " + state.accessToken,
    },
  };

  return config;
};

const saveAccessToken = async (state, accessToken) => {
  const body = {
    spotifyId: state.spotifyId,
    accessToken: accessToken,
  };
  try {
    axios.post(
      "https://spotifyplaynow.herokuapp.com/api/saveToken",
      body,
      {
        withCredentials: true,
      }
    );
  } catch (err) { }
};
const refreshAccessToken = async (state, dispatch) => {
  const body = {
    grant_type: "refresh_token",
    refresh_token: state.refreshToken,
  };

  try {
    const res = await axios.post(
      "https://accounts.spotify.com/api/token",
      QueryString.stringify(body),
      {
        withCredentials: true,
        headers: {
          Authorization:
            "basic " +
            window.btoa(
              import.meta.env.VITE_SPOTIFY_CLIENT_ID +
              ":" +
              import.meta.env.VITE_SPOTIFY_CLIENT_SECRET
            ),
        },
      }
    );
    await dispatch({
      type: "SET_ACCESS_TOKEN",
      payload: res.data.access_token,
    });
    saveAccessToken(state, res.data.access_token);
  } catch (err) {
    console.log(err);
  }
};

export const logout = async (dispatch) => {
  try {
    const res = await axios.get("https://spotifyplaynow.herokuapp.com/api/auth/spotify/logout")
    if (res.status === 200) dispatch({ type: "CLEAR_STATE" })
  } catch (err) {

  }
}

const AuthState = (props) => {
  const [spotifyState, spotifyDispatch] = useSpotify()
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get("https://spotifyplaynow.herokuapp.com/api/user",
        {
          withCredentials: true,
        }
      );
      dispatch({ type: "GET_USER", payload: res });
    };
    try {
      getUser().then(() => getAllPlaylists(spotifyDispatch))
    } catch (err) {
      console.log(err)
    }


  }, []);
  const initialState = {
    spotifyId: null,
    accessToken: null,
    refreshToken: null,
    displayName: null,
    pic: null,
  };
  const [state, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ state: state, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
