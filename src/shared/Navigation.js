import { Link } from "@reach/router";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/characters">Characters</Link>
            </li>
            <li className="nav-item">
              <Link to="/episodes">Episodes</Link>
            </li>
            <li className="nav-item">
              <Link to="/deaths">Episodes</Link>
            </li>
            <li className="nav-item">
              <Link to="/quotes">Quotes</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
