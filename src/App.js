import { Fragment, useState } from "react";
import { Router } from "@reach/router";
import { useFetch } from "./useFetch";
import "./App.css";

import Characters from "./components/Characters";
import Main from "./components/Main";
import Navigation from "./shared/Navigation";

const App = () => {
  const [charactersQuery, setCharactersQuery] = useState("characters");

  const baseUrl = "https://www.breakingbadapi.com/api";

  const charactersUrl =
    charactersQuery && `${baseUrl}/${charactersQuery}?limit=9&offset=0`;

  const { status, data, error } = useFetch(charactersUrl);

  const characters = data;

  return (
    <Fragment>
      <Navigation />
      <Router>
        <Main path="/" />
        <Characters path="/characters" characters={characters} />
      </Router>
    </Fragment>
  );
};

export default App;
