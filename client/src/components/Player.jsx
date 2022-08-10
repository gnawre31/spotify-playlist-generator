import React from "react";
import SpotifyPlayer from "react-spotify-web-playback";
import { useAuth } from "../context/auth/AuthState";
import { useSpotify, updatePlayerState } from "../context/spotify/SpotifyState";

const Player = () => {
  const [authState] = useAuth();
  const { accessToken } = authState;

  const [spotifyState, spotifyDispatch] = useSpotify();
  const { tracks } = spotifyState;

  if (tracks.length > 0) {
    return (
      <div className="absolute h-full w-full pl-8 pr-8" style={{ top: "50%" }}>
        <div className="flex justify-center w-full z-50">
          <SpotifyPlayer
            token={accessToken}
            autoPlay={tracks.length > 0 ? true : false}
            uris={tracks.map((t) => t.uri)}
            showSaveIcon={true}
            callback={(state) => updatePlayerState(spotifyDispatch, state)}
          />
        </div>
      </div>
    );
  } else return <></>;
};

export default Player;
