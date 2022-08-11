import React, { useState } from 'react'
import Modal from './NewPlaylistModal';

const NewPlaylist = () => {
    const [modal, setModal] = useState(false);
    const Toggle = () => setModal(!modal);
    return (
        <div>
            <button onClick={() => Toggle()}>New +</button>
            <Modal open={modal} close={Toggle} />
        </div>
    )
}

export default NewPlaylist