import { useEffect, useState } from "react";
import { useFetch } from "../../useFetch";
import "../../styles/Characters.css";

const Characters = () => {
  const [query, setQuery] = useState("characters");
  const [statuses, setStatuses] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedSeason, setSelectedSeason] = useState(false);

  // fetch characters
  const baseUrl = "https://www.breakingbadapi.com/api";
  const url = query && `${baseUrl}/${query}?limit=19&offset=0`;
  const { status, data, error } = useFetch(url);
  const characters = data;

  useEffect(() => {
    // get all character statuses
    const charStatuses = characters.map((character) => character.status);
    const statuses = new Set(charStatuses);

    setStatuses(statuses);

    // get all seasons
    const charAppearances = characters.map((character) => character.appearance);

    const reducedAppearances = charAppearances.reduce(
      (accumulator, currentValue) => accumulator.concat(currentValue),
      []
    );

    const appearances = new Set(reducedAppearances);

    setSeasons(appearances);
  }, [characters]);

  return (
    <div className="container">
      <div className="row filters">
        <div className="col-3">
          <select className="form-select" aria-label="Default select example">
            <option selected>Status</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div className="col-3">
          <select className="form-select" aria-label="Default select example">
            <option selected>Appearance</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <p>Characters go here...</p>
        </div>
      </div>
    </div>
  );
};

export default Characters;
