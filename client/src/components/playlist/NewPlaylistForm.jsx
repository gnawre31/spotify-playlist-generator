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
    const [mood, setMood] = useState("neutral")
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

    const radioStyle = 'inline-flex items-center bg-white rounded-md h-24 w-48 border justify-center cursor-pointer mr-4 '
    const selectedRadioStyle = 'bg-[#1DB954] border-[#1DB954] text-white'
    const notSelectedRadioStyle = 'bg-gray-200 border-gray-200 text-black hover:bg-gray-300'

    const checkboxStyle = 'inline-flex items-center bg-white rounded-md border h-full w-full justify-center cursor-pointer '
    const selectedCheckboxStyle = 'bg-[#1DB954] border-[#1DB954] text-white'
    const notSelectedCheckboxStyle = 'bg-gray-200 border-gray-200 text-black hover:bg-gray-300'

    return (
        <form className='flex flex-col justify-between w-full h-full pr-16 overflow-y-hidden overflow-y-scroll no-scrollbar' onSubmit={onSubmit}>
            <div className='w-full'>
                <p className='text-2xl font-bold mb-2'>Title</p>
                <input id='title' type="text" value={title} onChange={changeTitle} className="rounded-lg bg-gray-200 pl-4 pr-4 pt-2 pb-2 w-80" placeholder='Playlist title...' />


                <p className='text-2xl font-bold mb-2 mt-4'>Mood</p>
                <div>
                    <label className={`${radioStyle} + ${mood === "happy" ? selectedRadioStyle : notSelectedRadioStyle}`}>Happy
                        <input name="mood" type="radio" checked={mood === "happy"} value="happy" onChange={changeMood} className="hidden" />
                    </label>
                    <label className={`${radioStyle} + ${mood === "neutral" ? selectedRadioStyle : notSelectedRadioStyle}`}>Neutral
                        <input name="mood" type="radio" checked={mood === "neutral"} value="neutral" onChange={changeMood} className="hidden" />
                    </label>
                    <label className={`${radioStyle} + ${mood === "sad" ? selectedRadioStyle : notSelectedRadioStyle}`}>Sad
                        <input name="mood" type="radio" checked={mood === "sad"} value="sad" onChange={changeMood} className="hidden" />
                    </label>
                </div>

                <p className='text-2xl font-bold mb-2 mt-4'>Genres (Choose up to 5)</p>
                <div className='grid gap-4 w-full h-full grid-cols-4 no-scrollbar' >
                    {genreList.map((g, idx) => <div key={idx}>
                        <label className={`${checkboxStyle} ${checkboxGroup.genres.includes(g) ? selectedCheckboxStyle : notSelectedCheckboxStyle}`}>
                            <p className='capitalize'>{g}</p>
                            <input name="genre" type="checkbox" onChange={() => dispatch({ value: g })} className="hidden" checked={checkboxGroup.genres.includes(g)} />
                        </label>
                    </div>)}
                </div>
                <p className='text-2xl font-bold mb-2 mt-8'>All Done!</p>

                <button className="bg-[#1DB954] text-white text-xl pl-16 pr-16 mb-16 h-16" type="submit" >Create my playlist </button>
            </div>


        </form>
    )
}

export default NewPlaylistForm