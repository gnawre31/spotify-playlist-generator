export const defaultPlaylists = [
  {
    title: "Dance",
    color: "#9427A3",
    params: {
      // GENERAL ------------------------------
      limit: "50", // number of songs to pull
      market: "US", // location
      // seed ***********    requires at least 1 in either 3    **************
      seed_artists: "", // artist ID
      seed_genres: "pop, dance, party, hip-hop, work-out", // genre
      seed_tracks: "", // spotify track ID
      // popularity 0-not popular, 100-super popular
      min_popularity: "30",
      max_popularity: "100",
      target_popularity: "",
      // CONTEXT ------------------------------
      // acousticness 0-not acoustic, 1-very acoustic
      min_acousticness: "0",
      max_acousticness: "1",
      target_acousticness: "",
      // liveness 0-low probability, 1-high probability that this was performed live
      min_liveness: "0",
      max_liveness: "1",
      target_liveness: "",
      // MOOD ---------------------------------
      // danceability 0-not danceable, 1-very danceable
      min_danceability: "0.3",
      max_danceability: "1",
      target_danceability: "",
      // energy 0-slow, quiet, 1-fast,loud,noisy
      min_energy: "0.6",
      max_energy: "1",
      target_energy: "",
      // valence 0-sad, 1-happy
      min_valence: "0.2",
      max_valence: "1",
      target_valence: "",
      //tempo beats per minute, usually between 40 and 200
      min_tempo: "80",
      max_tempo: "200",
      target_tempo: "",
      // PROPERTIES ---------------------------
      // instrumentalness 0-all vocals, 1-no vocals
      min_instrumentalness: "0",
      max_instrumentalness: "1",
      target_instrumentalness: "",
      // loudness dB, usually between -60 and 0
      min_loudness: "-60",
      max_loudness: "0",
      target_loudness: "",
      // speechiness 0-not speechy, 1-talk-show like
      min_speechiness: "0",
      max_speechiness: "0.6",
      target_speechiness: "",
      // MISC --------------------------------
      // key the key the track is in, E.g. 0 = C, 1 = C♯/D♭, 2 = D
      min_key: "",
      max_key: "",
      target_key: "",
      // mode modality of track, major, minor
      min_mode: "",
      max_mode: "",
      target_mode: "",
      // time signature overall time signature, beats per bar
      min_time_signature: "",
      max_time_signature: "",
      target_time_signature: "",
      // duration length of song
      min_duration_ms: "",
      max_duration_ms: "",
      target_duration_ms: "",
    },
  },
  {
    title: "Study",
    unified: "1f4d6",
    color: "#609070",
    params: {
      // GENERAL ------------------------------
      limit: "50", // number of songs to pull
      market: "US", // location
      // seed ***********    requires at least 1 in either 3    **************
      seed_artists: "", // artist ID
      seed_genres: "study", // genre
      seed_tracks: "", // spotify track ID
      // popularity 0-not popular, 100-super popular
      min_popularity: "30",
      max_popularity: "100",
      target_popularity: "",
      // CONTEXT ------------------------------
      // acousticness 0-not acoustic, 1-very acoustic
      min_acousticness: "0",
      max_acousticness: "1",
      target_acousticness: "",
      // liveness 0-low probability, 1-high probability that this was performed live
      min_liveness: "0",
      max_liveness: "1",
      target_liveness: "",
      // MOOD ---------------------------------
      // danceability 0-not danceable, 1-very danceable
      min_danceability: "0",
      max_danceability: "0.7",
      target_danceability: "",
      // energy 0-slow, quiet, 1-fast,loud,noisy
      min_energy: "0",
      max_energy: "0.7",
      target_energy: "",
      // valence 0-sad, 1-happy
      min_valence: "0",
      max_valence: "1",
      target_valence: "",
      //tempo beats per minute, usually between 40 and 200
      min_tempo: "40",
      max_tempo: "120",
      target_tempo: "",
      // PROPERTIES ---------------------------
      // instrumentalness 0-all vocals, 1-no vocals
      min_instrumentalness: "0",
      max_instrumentalness: "0.7",
      target_instrumentalness: "",
      // loudness dB, usually between -60 and 0
      min_loudness: "-60",
      max_loudness: "0",
      target_loudness: "",
      // speechiness 0-not speechy, 1-talk-show like
      min_speechiness: "0",
      max_speechiness: "0.7",
      target_speechiness: "",
      // MISC --------------------------------
      // key the key the track is in, E.g. 0 = C, 1 = C♯/D♭, 2 = D
      min_key: "",
      max_key: "",
      target_key: "",
      // mode modality of track, major, minor
      min_mode: "",
      max_mode: "",
      target_mode: "",
      // time signature overall time signature, beats per bar
      min_time_signature: "",
      max_time_signature: "",
      target_time_signature: "",
      // duration length of song
      min_duration_ms: "",
      max_duration_ms: "",
      target_duration_ms: "",
    },
  },
];
