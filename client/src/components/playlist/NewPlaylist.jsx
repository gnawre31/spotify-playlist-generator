import React, { useState } from 'react'
import Modal from './NewPlaylistModal';

const NewPlaylist = () => {
    const [modal, setModal] = useState(false);
    const Toggle = () => setModal(!modal);
    return (
        <div onClick={() => Toggle()} className='bg-gray-800 rounded-xl col-span-1 h-72 flex items-center justify-center hover:bg-gray-600 cursor-pointer'>
            <p >New +</p>
            <Modal open={modal} close={Toggle} />
        </div>
    )
}

export default NewPlaylist