import React from 'react'
import { useSpotify } from '../../context/spotify/SpotifyState'
import Track from './Track'

const TrackList = () => {
  const [spotifyState] = useSpotify()
  const { tracks } = spotifyState
  return (
    <div className="overflow-y-auto w-1/4 pt-12 pb-12 pr-4 pl-2">
      <div className='text-2xl font-bold mb-4'>Tracks</div>
      <div>
        {tracks.map((track, idx) => <Track key={idx} track={track} />)}
      </div>

    </div>
  )
}

export default TrackList