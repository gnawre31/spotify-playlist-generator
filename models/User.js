const mongoose = require("mongoose");
const PlaylistSchema = require("./Playlist");
const Playlist = require("./Playlist");

const UserSchema = new mongoose.Schema({
  spotifyId: {
    type: String,
    required: true,
  },
  accessToken: {
    type: String,
    required: true,
  },
  refreshToken: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  pic: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", UserSchema);
