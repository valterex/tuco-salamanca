import { Fragment, useEffect, useState } from "react";
import useDropdown from "../hooks/useDropdown";
import { useFetch } from "../hooks/useFetch";
import "../styles/Characters.css";

const Characters = () => {
  const [query, setQuery] = useState("");
  const [statuses, setStatuses] = useState([]);
  const [characterStatus, StatusDropdown] = useDropdown("", statuses);

  // fetch characters
  const url =
    query && `${process.env.REACT_APP_BASE_URL}/${query}?limit=9&offset=0`;

  const { status, data, error } = useFetch(url);
  const characters = data;

  useEffect(() => {
    setQuery("characters");

    // get all character statuses
    const getCharacterStatuses = () => {
      const charStatusesList = characters.map((character) => character.status);
      const statuses = new Set(charStatusesList);
      const statusesArr = Array.from(statuses);

      setStatuses(statusesArr);
    };

    getCharacterStatuses();
  }, [characters]);

  return (
    <Fragment>
      <div className="row center-md">
        <div className="col-md-4 filters">
          <div className="box-row">
            <p>Status</p>
            <StatusDropdown />
          </div>
        </div>
        <div className="col-md-4">
          <div className="box-row">
            {status === "error" && <div>{error}</div>}
            {status === "fetching" && <div className="loading"></div>}
            {status === "fetched" && (
              <>
                {characters.length === 0 && (
                  <div> No characters found! :( </div>
                )}
                {characters.map((c) => (
                  <div className="article" key={c.char_id}>
                    <p>{c.name}</p>
                  </div>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Characters;
