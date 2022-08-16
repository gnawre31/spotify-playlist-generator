import React from "react";
import Player from "../components/Player";
import PlaylistList from "../components/playlist/PlaylistList";
import TrackList from "../components/track/TrackList";
import { logout, reqConfig, useAuth } from "../context/auth/AuthState";
import { useSpotify } from "../context/spotify/SpotifyState";

const Main = () => {
  const [spotifyState, spotifyDispatch] = useSpotify();
  const [authState] = useAuth();
  const { displayName, pic } = authState;

  const logUserOut = () => {
    logout(spotifyDispatch)
  }


  return (
    <div className="h-screen">
      <div className="flex justify-between h-5/6">
        <div className="h-5/6 pt-12 pb-6 pr-12 pl-24 w-3/4">
          <div className="flex items-center mb-8 justify-between items-between w-full">
            <div className="flex">
              <div className="h-8 w-8 rounded-full mr-2">
                <img src={pic} className="h-8 w-8 rounded-full" />
              </div>

              <div className="text-2xl ">{displayName}</div>
            </div>
            <div onClick={logUserOut} className="pb-2 pt-2 pr-6 pl-6 rounded-full bg-gray-800 hover:bg-gray-600 cursor pointer">
              logout
            </div>
          </div>
          <PlaylistList />
        </div>
        <TrackList />
      </div>
      <div>
        <Player />
      </div>
    </div>
  );
};

export default Main;
