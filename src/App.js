import { Fragment, useState } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Navigation from "./shared/Navigation";
import Characters from "./components/characters/Characters";

const App = () => {
  return (
    <Fragment>
      <Navigation />
      <Router>
        <Characters path="/characters" />
      </Router>
    </Fragment>
  );
};

export default App;
