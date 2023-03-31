const SpotifyStrategy = require("passport-spotify").Strategy;
const dotenv = require("dotenv");
const User = require("../models/User");
dotenv.config({ path: "../.env" });

module.exports = function (passport) {
  passport.use(
    new SpotifyStrategy(
      {
        clientID: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        callbackURL: "http://localhost:5001/api/auth/spotify/callback",
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          const query = { spotifyId: profile.id };
          const update = {
            $set: {
              spotifyId: profile.id,
              accessToken: accessToken,
              refreshToken: refreshToken,
              displayName: profile.displayName,
              pic: profile.photos[0].value,
            },
          };
          const options = {
            upsert: true,
            new: true,
            setDefaultsOnInsert: true,
          };

          // if (user) {
          const user = await User.findOneAndUpdate(query, update, options);
          await done(null, user);
        } catch (err) {
          console.log(err);
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user));
  });
};
