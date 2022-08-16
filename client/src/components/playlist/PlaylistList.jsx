import React from 'react'
import { useSpotify } from '../../context/spotify/SpotifyState';
import NewPlaylist from './NewPlaylist';
import Playlist from './Playlist';




const PlaylistList = () => {
  const [spotifyState] = useSpotify();
  const { playlists } = spotifyState;



  return (
    <div className='h-full'>
      <div className='text-2xl font-bold mb-2'>Playlists</div>
      <div className='grid grid-cols-3 gap-4 h-full overflow-y-hidden overflow-y-scroll no-scrollbar'>
        <NewPlaylist />
        {playlists.map((playlist, idx) => (
          <Playlist key={idx} playlist={playlist} />
        ))}

      </div>


    </div>
  )
}

export default PlaylistList