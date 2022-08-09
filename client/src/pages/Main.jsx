import React from "react";
import { reqConfig, useAuth } from "../context/auth/AuthState";
import { useSpotify, getTracks } from "../context/spotify/SpotifyState";

const Main = () => {
  const [spotifyState, spotifyDispatch] = useSpotify();
  const [authState, authDispatch] = useAuth();

  const newTracks = async () => {
    const config = await reqConfig(authState, authDispatch);
    getTracks(spotifyDispatch, spotifyState.playlists[0], config);
  };
  return (
    <div>
      <div>main</div>
      <div>main page</div>
      <div onClick={newTracks}>get tracks</div>
    </div>
  );
};

export default Main;
