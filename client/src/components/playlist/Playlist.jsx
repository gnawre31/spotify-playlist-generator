import React from 'react'
import { useAuth, reqConfig } from '../../context/auth/AuthState';
import { useSpotify, getTracks, deletePlaylist } from '../../context/spotify/SpotifyState';

const Playlist = (props) => {
    const [spotifyState, spotifyDispatch] = useSpotify();
    const [authState, authDispatch] = useAuth();

    const { playlist } = props

    const newTracks = async () => {
        reqConfig(authState, authDispatch).then((config) => {
            getTracks(spotifyDispatch, playlist, config);
        });
    };
    const removePlaylist = async (e) => {
        e.stopPropagation();
        deletePlaylist(spotifyDispatch, playlist._id, spotifyState.currPlaylist);

    }
    const Triangle = ({ width = 0, height = 0, fill = "black" } = {}) => {
        return (
            <svg width={width} height={height}>
                <path
                    fill={fill}
                    d={`M 0 0 L ${width} ${height / 2} L 0 ${height} L 0 0`}
                />
            </svg>
        );
    };


    const playlistStyle = playlist._id === spotifyState.currPlaylist ? 'bg-[#1DB954]' : "bg-gray-800"
    const buttonStyle = playlist._id === spotifyState.currPlaylist ? 'bg-white hover:bg-[#f2f2f2] text-gray-500' : 'bg-gray-700 hover:bg-gray-600'
    const iconFill = playlist._id === spotifyState.currPlaylist ? '#1DB954' : 'grey'


    return (
        <div className={'flex flex-col items-center rounded-xl col-span-1 h-72 ' + playlistStyle} >
            <div className='flex justify-between w-full items-center'>
                <p className='truncate text-overflow pl-4 pr-4'>{playlist.title}</p>
                <button onClick={removePlaylist} className={'h-8 w-8 flex items-center cursor-pointer justify-center rounded-full text-sm m-2 ' + buttonStyle}>X</button>
            </div>
            <button onClick={newTracks} className={'cursor-pointer m-auto h-24 w-24 rounded-full flex items-center justify-center ' + buttonStyle}><Triangle width={24} height={24} fill={iconFill} /></button>
        </div >
    )
}

export default Playlist