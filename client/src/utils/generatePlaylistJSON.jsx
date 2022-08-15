export const generatePlaylist = (data, numberOfPlaylists) => {
    const genres = data.genres.length > 0 ? data.genres.toString() : "pop"
    const mood = data.mood.length > 0 ? data.mood : "neutral"
    const title = data.title.length > 0 ? data.title : `Playlist ${numberOfPlaylists + 1}`

    if (mood === "happy") {

        return {
            spotifyId: data.spotifyId,
            title: title,
            color: "#9427A3",
            params: {
                seed_genres: genres,
                min_danceability: "0.5",
                min_valence: "0.5",
            }
        }
    }
    else if (mood === "sad") {
        return {
            spotifyId: data.spotifyId,
            title: title,
            color: "#9427A3",
            params: {
                seed_genres: genres,
                max_danceability: "0.8",
                max_valence: "0.5",
                max_tempo: "160"
            }
        }
    }
    else {
        return {
            spotifyId: data.spotifyId,
            title: title,
            color: "#9427A3",
            params: {
                seed_genres: genres,
            }
        }
    }
}

