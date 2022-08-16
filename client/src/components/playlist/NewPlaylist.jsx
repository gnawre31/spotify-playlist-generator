import React, { useState } from 'react'
import Modal from './NewPlaylistModal';

const NewPlaylist = () => {
    const [modal, setModal] = useState(false);
    const Toggle = () => setModal(!modal);
    return (
        <div onClick={() => Toggle()} className='bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-600 cursor-pointer'>
            <div >New +</div>
            <Modal open={modal} close={Toggle} />
        </div>
    )
}

export default NewPlaylist