import React from 'react'
import { useSpotify } from '../../context/spotify/SpotifyState'
import Track from './Track'

const TrackList = () => {
    const [spotifyState] = useSpotify()
    const { tracks } = spotifyState
  return (
    <div className="overflow-y-auto w-1/4">
        <div>Tracks</div>
        <div>
            {tracks.map((track, idx) => <Track key={idx} track={track}/>)}
        </div>

    </div>
  )
}

export default TrackList