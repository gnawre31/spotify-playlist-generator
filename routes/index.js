const express = require("express");
const User = require("../models/User");
const router = express.Router();

// DESC    User
// ROUTE   GET /api/user
router.get("/user", (req, res) => {
  req.isAuthenticated()
    ? res.json({
        spotifyId: req.user.spotifyId,
        accessToken: req.user.accessToken,
        refreshToken: req.user.refreshToken,
        displayName: req.user.displayName,
        pic: req.user.pic,
      })
    : res.json({
        spotifyId: null,
        accessToken: null,
        refreshToken: null,
        displayName: null,
        pic: null,
      });
});

// @desc    User
// @route   POST /saveToken
router.post("/saveToken", (req, res) => {
  if (req.isAuthenticated()) {
    User.findOneAndUpdate(
      { spotifyId: req.body.spotifyId },
      {
        $set: {
          accessToken: req.body.accessToken,
        },
      }
    );
  } else res.json({ error: "please login" });
});

module.exports = router;
