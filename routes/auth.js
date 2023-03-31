const express = require("express");
const passport = require("passport");
const router = express.Router();

// DESC    Spotify OAuth Transaction
// ROUTE   GET api/auth/spotify
router.get(
  "/spotify",
  passport.authenticate("spotify", {
    scope: [
      "streaming",
      "user-read-email",
      "user-read-private",
      "user-read-playback-state",
      "user-modify-playback-state",
      "user-library-read",
      "user-library-modify",
    ],
  })
);

// DESC    Spotify OAuth Callback
// ROUTE   GET api/auth/spotify/callback

// const successRedirect = "https://spotifyplaynow.herokuapp.com/main";
// const failureRedirect = "https://spotifyplaynow.herokuapp.com/";

const successRedirect = "http://localhost:3000/main";
const failureRedirect = "http://localhost:3000/main";

router.get(
  "/spotify/callback",
  passport.authenticate("spotify", {
    successRedirect: successRedirect,
    failureRedirect: failureRedirect,
  })
);

// DESC    Logout User
// ROUTE   GET api/auth/logout
router.get("/spotify/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});

module.exports = router;
