import React from 'react'
import { useSpotify } from '../../context/spotify/SpotifyState';
import NewPlaylist from './NewPlaylist';
import Playlist from './Playlist';




const PlaylistList = () => {
  const [spotifyState] = useSpotify();
  const { playlists } = spotifyState;



  return (
    <div>
      <div>
        {playlists.map((playlist, idx) => (
          <Playlist key={idx} playlist={playlist} />
        ))}
      </div>
      <NewPlaylist />

    </div>
  )
}

export default PlaylistList