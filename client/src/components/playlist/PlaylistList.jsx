import React from 'react'
import { useSpotify } from '../../context/spotify/SpotifyState';
import NewPlaylist from './NewPlaylist';
import Playlist from './Playlist';




const PlaylistList = () => {
  const [spotifyState] = useSpotify();
  const { playlists } = spotifyState;



  return (
    <div className='h-92'>
      <div className='text-2xl font-bold mb-2'>Playlists</div>
      <div className='grid grid-cols-[repeat(3,1fr)] grid-rows-[18rem_18rem_18rem] gap-4 h-[60vh] overflow-y-hidden overflow-y-scroll no-scrollbar'>
        <NewPlaylist />
        {playlists.map((playlist, idx) => (
          <Playlist key={idx} playlist={playlist} />
        ))}

      </div>


    </div>
  )
}

export default PlaylistList