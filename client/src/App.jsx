import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthState from "./context/AuthState";
import Home from "./pages/Home";
import Main from "./pages/Main";
import PrivateRoute from "./routing/PrivateRoute";
import PublicRoute from "./routing/PublicRoute";

const App = () => {
  return (
    <AuthState className="text-xl">
      hi
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
    </AuthState>
  );
};

export default App;
