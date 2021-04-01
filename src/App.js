import { Router } from "@reach/router";

import Navigation from "./shared/Navigation";
import Characters from "./components/Characters";
// import Episodes from "./components/Episodes";
// import Deaths from "./components/Deaths";
// import Quotes from "./components/Quotes";

const App = () => {
  return (
    <>
      <Navigation />
      <Router>
        <Characters path="/characters" />
      </Router>
    </>
  );
};

export default App;
