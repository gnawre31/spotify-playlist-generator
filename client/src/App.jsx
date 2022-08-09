import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthState from "./context/auth/AuthState";
import SpotifyState from "./context/spotify/SpotifyState";
import Home from "./pages/Home";
import Main from "./pages/Main";
import PrivateRoute from "./routing/PrivateRoute";
import PublicRoute from "./routing/PublicRoute";

const App = () => {
  return (
    <AuthState>
      <SpotifyState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PublicRoute Component={Home} />} />
            <Route
              exact
              path="/main"
              element={<PrivateRoute Component={Main} />}
            />
          </Routes>
        </BrowserRouter>
      </SpotifyState>
    </AuthState>
  );
};

export default App;
