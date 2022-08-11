import React from 'react'
import { genreList } from '../../constants/genres'

const NewPlaylistForm = () => {
    return (
        <form className='flex flex-col justify-between w-full h-full'>
            <div className='w-full'>
                <div>
                    <label>Happy
                        <input name="mood" type="radio" checked={true} />
                    </label>
                    <label>Sad
                        <input name="mood" type="radio" />
                    </label>
                </div>
                <div>
                    <label>Fast
                        <input name="bpm" type="radio" checked={true} />
                    </label>
                    <label>Slow
                        <input name="bpm" type="radio" />
                    </label>
                </div>
                <div>
                    <label>Hype
                        <input name="activity" type="radio" checked={true} />
                    </label>
                    <label>Focus
                        <input name="activity" type="radio" />
                    </label>
                </div>
                <div className='grid grid-cols-4 no-scrollbar m-4' >
                    {genreList.map((g, idx) => <div key={idx}>
                        <label className='h-full w-full flex'>
                            <div>{g}</div>
                            <input name="genre" type="checkbox" />
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