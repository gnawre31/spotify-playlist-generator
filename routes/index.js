const express = require("express");
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

module.exports = router;
