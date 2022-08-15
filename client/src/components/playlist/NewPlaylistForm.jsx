import React, { useReducer, useState } from 'react'
import { genreList } from '../../constants/genres'
import { useAuth } from '../../context/auth/AuthState'
import { createPlaylist, useSpotify } from '../../context/spotify/SpotifyState'
import { generatePlaylist } from '../../utils/generatePlaylistJSON'

const checkboxReducer = (state, action) => {
    if (state.genres.includes(action.value)) {
        return {
            genres: state.genres.filter(value => value !== action.value)
        }
    }
    else if (state.genres.length >= 5) {
        console.log(state)
        const newState = state.genres.slice(1)
        return {
            genres: [...newState, action.value]
        }
    }
    else {
        return {
            genres: [...state.genres, action.value]
        }
    }
}

const NewPlaylistForm = ({ close }) => {

    const [spotifyState, spotifyDispatch] = useSpotify()
    const [authState, authDispatch] = useAuth()
    const [mood, setMood] = useState("")
    const [title, setTitle] = useState("")

    const changeMood = e => setMood(e.target.value)
    const changeTitle = e => setTitle(e.target.value)

    const initialCheckboxState = {
        genres: []
    }
    const [checkboxGroup, dispatch] = useReducer(checkboxReducer, initialCheckboxState)

    const onSubmit = async (e) => {
        e.preventDefault()
        const data = {
            spotifyId: authState.spotifyId,
            title,
            mood,
            genres: checkboxGroup.genres
        }
        const playlistJSON = generatePlaylist(data, spotifyState.playlists.length)
        await createPlaylist(spotifyDispatch, playlistJSON)
        close()
    }

    return (
        <form className='flex flex-col justify-between w-full h-full' onSubmit={onSubmit}>
            <div className='w-full'>
                <div>
                    <label id="title">Title</label>
                </div>
                <input id='title' type="text" value={title} onChange={changeTitle} />
                <div>
                    <label>Happy
                        <input name="mood" type="radio" checked={mood === "happy"} value="happy" onChange={changeMood} />
                    </label>
                    <label>Neutral
                        <input name="mood" type="radio" checked={mood === "neutral"} value="neutral" onChange={changeMood} />
                    </label>
                    <label>Sad
                        <input name="mood" type="radio" checked={mood === "sad"} value="sad" onChange={changeMood} />
                    </label>
                </div>
                <div className='grid grid-cols-4 no-scrollbar m-4' >
                    {genreList.map((g, idx) => <div key={idx}>
                        <label className='h-full w-full flex'>
                            <div>{g}</div>
                            <input name="genre" type="checkbox" onChange={() => dispatch({ value: g })} checked={checkboxGroup.genres.includes(g)} />
                        </label>
                    </div>)}
                </div>
            </div>
            <div className="">
                <button className="bg-green-500 pt-2 pb-2 pl-8 pr-8 rounded-full" type="submit" >create </button>
            </div>

        </form>
    )
}

export default NewPlaylistForm