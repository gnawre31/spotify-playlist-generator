const express = require("express");
const Playlist = require("../models/Playlist");
const router = express.Router();

// DESC    get all playlists
// ROUTE   GET /api/playlist
router.get("/all", (req, res) => {
  if (req.isAuthenticated()) {
    Playlist.find({ spotifyId: req.user.spotifyId }, (err, result) => {
      if (err) res.sendStatus(500);
      else res.send(result);
    });
  }
});

// DESC    create new playlist
// ROUTE   POST /api/playlist
router.post("/create", (req, res) => {
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
        if (err) res.sendStatus(500);
        else res.send(result);
      }
    );
  } else res.sendStatus(400);
});

// DESC    delete playlist
// ROUTE   POST /api/playlist
router.post("/delete", (req, res) => {
  if (req.isAuthenticated()) {
    Playlist.findOneAndRemove({ _id: req.body._id }, (err) => {
      if (err) res.sendStatus(500);
      else res.sendStatus(200);
    });
  } else {
    res.sendStatus(400);
  }
});

module.exports = router;
