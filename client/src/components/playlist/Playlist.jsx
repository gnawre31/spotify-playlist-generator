import React from 'react'
import { useAuth, reqConfig } from '../../context/auth/AuthState';
import { useSpotify, getTracks } from '../../context/spotify/SpotifyState';

const Playlist = (props) => {
    const [spotifyState, spotifyDispatch] = useSpotify();
    const [authState, authDispatch] = useAuth();


    const { playlist } = props

    const newTracks = async () => {
        reqConfig(authState, authDispatch).then((config) => {
            getTracks(spotifyDispatch, playlist, config);
        });
    };

    return (
        <div>
            <div onClick={newTracks}>{playlist.title}</div>
        </div>
    )
}

export default Playlist