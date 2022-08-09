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

const successRedirect =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000/main"
    : "/main";
const failureRedirect =
  process.env.NODE_ENV === "development" ? "http://localhost:3000/" : "/";

router.get(
  "/spotify/callback",
  passport.authenticate("spotify", {
    // successRedirect: "http://localhost:3000/main",
    // failureRedirect: "http://localhost:3000/",
    successRedirect: successRedirect,
    failureRedirect: failureRedirect,
  })
);

// DESC    Logout User
// ROUTE   GET api/auth/logout
router.get("/spotify/logout", (req, res) => {
  req.logout();
  res.redirect(failureRedirect);
});

module.exports = router;
