import CharactersList from "./CharactersList";

const Characters = ({ characters }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">col</div>
        <div className="col-3">col</div>
        <div className="col-3">col</div>
        <div className="col-3">col</div>
      </div>
      <div className="row">
        <div className="col-10">
          <CharactersList characters={characters} />
        </div>
      </div>
    </div>
  );
};

export default Characters;
