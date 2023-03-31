import React from 'react'
import { useSpotify } from '../../context/spotify/SpotifyState'

const Track = (props) => {
  const { track } = props
  const [spotifyState, spotifyDispatch] = useSpotify()

  const currTrackStyling = spotifyState.playerState && spotifyState.playerState.track && spotifyState.playerState.track.id === track.id ? " bg-gray-600" : "bg-gray-900"
  // const onClick = () => {
  //   setTrack(spotifyDispatch, track)
  // }

  return (
    <div className={`h-20 mb-2 rounded-lg + ${currTrackStyling}`}>
      <div className='flex'>
        <img className="h-20 mr-2 w-20 rounded-tl-sm rounded-bl-lg" src={track.album.images[2].url} />
        <div className='w-4/6 pr-2 flex flex-col justify-center'>
          <div className='text-overflow truncate font-bold text-lg pr-4'>{track.name}</div>
          <div className='flex truncate text-overflow '>{track.artists.map((a, idx) =>
            <div key={idx} className="" >{a.name.toString() + (idx !== track.artists.length - 1 ? "," : "")}&nbsp;</div>


          )}</div>
        </div>

      </div>


      {/* <div>{JSON.stringify(track.album.images[0])}</div> */}
    </div>
  )
}

export default Track