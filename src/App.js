import React from "react";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";

import "./App.css";

function App() {
  return (
    <>
      Hello World!
      <Home />
      <Rooms />
      <SingleRoom />
      <Error />
    </>
  );
}

export default App;
