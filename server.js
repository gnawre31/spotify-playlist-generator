// Imports
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo");

const path = require("path");

// Config
dotenv.config({ path: "./.env" });
const connectDB = require("./config/connectDB");
require("./config/passport")(passport);

// Environment Variables
const PORT = process.env.PORT || 5000;

// Connect to DB
connectDB();

// Start Server
const app = express();

// middleware to parse request body
app.use(express.json());

// Static File Declaration
app.use(express.static(path.join(__dirname, "client/dist")));

// CORS Middleware
const origin = "http://localhost:3000";
console.log(origin);
app.use(
  cors({
    credentials: true,
    origin: origin,
  })
);

// Logging Middleware
// app.use(morgan("dev"));

app.use(
  session({
    secret: "story book",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
    }),
  })
);

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/", require("./routes/index"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/playlist", require("./routes/playlist"));

// Serve static assets in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/dist"));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
  );
}

// Server
app.listen(PORT, console.log(`Server running on port ${PORT}`));
