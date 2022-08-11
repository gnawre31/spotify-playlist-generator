import React from "react";
import Player from "../components/Player";
import PlaylistList from "../components/playlist/PlaylistList";
import TrackList from "../components/track/TrackList";
import { reqConfig, useAuth } from "../context/auth/AuthState";
import { useSpotify } from "../context/spotify/SpotifyState";

const Main = () => {
  const [spotifyState, spotifyDispatch] = useSpotify();
  const [authState] = useAuth();
  const { displayName, pic } = authState;



  return (
    <div className="h-screen">
      <div className="flex justify-between h-5/6">
        <div className="h-5/6">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full">
              <img src={pic} className="h-8 w-8 rounded-full" />
            </div>

            <div>{displayName}</div>
          </div>
          <PlaylistList />
        </div>
        <TrackList />

        {/* <div className="overflow-y-auto">
          {tracks.map((track, idx) => (
            <div key={idx}>{JSON.stringify(track.name)}</div>
          ))}
        </div> */}
      </div>
      <div>
        <Player />
      </div>
    </div>
  );
};

export default Main;
