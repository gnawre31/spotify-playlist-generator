import React from 'react'

const Track = (props) => {
    const {track} = props
  return (
    <div>
        <div>{track.name}</div>
    </div>
  )
}

export default Track