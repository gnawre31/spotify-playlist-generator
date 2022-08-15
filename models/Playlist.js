const mongoose = require("mongoose");

const PlaylistSchema = new mongoose.Schema({
  spotifyId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  params: {
    limit: {
      type: String,
      default: "50",
    },
    market: {
      type: String,
      default: "US",
    },
    seed_artists: String,
    seed_tracks: String,
    seed_genres: {
      type: String,
      default: "pop",
    },
    min_popularity: {
      type: String,
      default: "20",
    },
    max_popularity: {
      type: String,
      default: "100",
    },
    target_popularity: String,
    min_acousticness: {
      type: String,
      default: "0",
    },
    max_acousticness: {
      type: String,
      default: "1",
    },
    target_acousticness: String,
    min_liveness: {
      type: String,
      default: "0",
    },
    max_liveness: {
      type: String,
      default: "1",
    },
    target_liveness: String,
    min_danceability: String,
    max_danceability: String,
    target_danceability: String,
    min_energy: String,
    max_energy: String,
    target_energy: String,
    min_valence: String,
    max_valence: String,
    target_valence: String,
    min_tempo: String,
    max_tempo: String,
    target_tempo: String,
    min_instrumentalness: String,
    max_instrumentalness: String,
    target_instrumentalness: String,
    min_loudness: String,
    max_loudness: String,
    target_loudness: String,
    min_speechiness: String,
    max_speechiness: {
      type: String,
      default: "0.75",
    },
    target_speechiness: String,
    min_key: String,
    max_key: String,
    target_key: String,
    min_mode: String,
    max_mode: String,
    target_mode: String,
    min_time_signature: String,
    max_time_signature: String,
    target_time_signature: String,
    min_duration_ms: String,
    max_duration_ms: String,
    target_duration_ms: String,
  },
});

module.exports = mongoose.model("Playlist", PlaylistSchema);
