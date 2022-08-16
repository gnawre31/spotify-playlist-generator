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
        deletePlaylist(spotifyDispatch, playlist._id);

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

    return (
        <div className='bg-gray-800 flex  flex-col items-center rounded-xl ' >
            <div className='flex justify-between w-full items-center'>
                <div className='truncate text-overflow pl-4 pr-4'>{playlist.title}</div>
                <div onClick={removePlaylist} className='h-8 w-8 flex items-center cursor-pointer justify-center bg-gray-700 rounded-full text-sm m-2 hover:bg-gray-200 hover:text-black'>X</div>
            </div>
            <div onClick={newTracks} className='cursor-pointer mt-12 h-24 mb-12 w-24 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center'><Triangle width={24} height={24} fill="gray" /></div>
        </div>
    )
}

export default Playlist