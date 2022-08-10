import React from "react";
import Player from "../components/Player";
import { reqConfig, useAuth } from "../context/auth/AuthState";
import { useSpotify, getTracks } from "../context/spotify/SpotifyState";

const Main = () => {
  const [spotifyState, spotifyDispatch] = useSpotify();
  const [authState, authDispatch] = useAuth();

  const { tracks, playlists } = spotifyState;
  const { displayName, pic } = authState;

  const newTracks = async () => {
    reqConfig(authState, authDispatch).then((config) => {
      getTracks(spotifyDispatch, playlists[0], config);
    });
  };
  return (
    <div>
      <div>{displayName}</div>
      <img src={pic} width="80px" height="80px" />
      <div onClick={newTracks}> get tracks</div>

      <Player />
      <div>
        {tracks.map((track, idx) => (
          <div key={idx}>{JSON.stringify(track.name)}</div>
        ))}
      </div>
    </div>
  );
};

export default Main;
