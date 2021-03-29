import { Router } from "@reach/router";
import "./App.css";
import Navigation from "./shared/Navigation";
import Characters from "./components/Characters";
import Episodes from "./components/Episodes";
import Deaths from "./components/Deaths";
import Quotes from "./components/Quotes";

const App = () => {
  return (
    <>
      <Navigation />
      <Router>
        <Characters path="/characters" />
        <Episodes path="/episodes" />
        <Deaths path="/deaths" />
        <Quotes path="/quotes" />
      </Router>
    </>
  );
};

export default App;
