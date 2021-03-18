import { Link } from "@reach/router";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="haha">
          Active
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="haha">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="haha">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link disabled"
          href="haha"
          tabindex="-1"
          aria-disabled="true"
        >
          Disabled
        </a>
      </li>
    </ul>
  );
};

export default Navigation;
