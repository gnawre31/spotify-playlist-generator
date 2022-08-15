const express = require("express");
const Playlist = require("../models/Playlist");
const router = express.Router();

// DESC    get all playlists
// ROUTE   GET /api/playlist
router.get("/all", (req, res) => {
  if (req.isAuthenticated()) {
    Playlist.find({ spotifyId: req.user.spotifyId }, (err, result) => {
      if (err) console.log(err);
      else res.send(result);
    });
  }
});

// DESC    create new playlist
// ROUTE   POST /api/playlist
router.post("/create", async (req, res) => {
  if (req.isAuthenticated()) {
    Playlist.create(
      {
        spotifyId: req.body.spotifyId,
        title: req.body.title,
        color: req.body.color,
        params: {
          seed_genres: req.body.params.seed_genres,
          min_danceability: req.body.params.min_danceability
            ? req.body.params.min_danceability
            : "0",
          min_valence: req.body.params.min_valence
            ? req.body.params.min_valence
            : "0",
          max_danceability: req.body.params.max_danceability
            ? req.body.params.max_danceability
            : "1",
          max_valence: req.body.params.max_valence
            ? req.body.params.max_valence
            : "1",
          max_tempo: req.body.params.max_tempo
            ? req.body.params.max_tempo
            : "200",
        },
      },
      (err, result) => {
        if (err) console.log(err);
        else res.send(result);
      }
    );
  }
});

module.exports = router;
