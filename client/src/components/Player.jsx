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
      <div>
        <div className="z-0 fixed w-screen pr-8 pl-8 flex justify-center items-center" style={{ backgroundColor: "#1DB954", bottom: "0%", height: "15vh" }}>
          <SpotifyPlayer
            token={accessToken}
            autoPlay={tracks.length > 0 ? true : false}
            uris={tracks.map((t) => t.uri)}
            showSaveIcon={true}
            callback={(state) => updatePlayerState(spotifyDispatch, state)}
            styles={{
              activeColor: "#fff",
              bgColor: "#1DB954",
              color: "#fff",
              loaderColor: "#fff",
              sliderColor: "#fff",
              trackArtistColor: "#fff",
              trackNameColor: "#fff",
              sliderTrackColor: "#179443",
              sliderHandleColor: "#fff",
              sliderTrackBorderRadius: "999px",
            }}
          />
        </div>
      </div>
    );
  } else return <></>;
};

export default Player;
