import { useContext, useEffect, useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./AuthReducer";
import axios from "axios";
import QueryString from "qs";

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
    dispatch({ type: "SET_ACCESS_TOKEN", payload: res.data.access_token });
  } catch (err) {
    console.log(err);
  }
};

const AuthState = (props) => {
  useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(
        process.env.NODE_ENV === "development"
          ? "http://localhost:5001/api/user"
          : "/api/user",
        {
          withCredentials: true,
        }
      );
      dispatch({ type: "GET_USER", payload: res });
    };
    getUser();
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
