import "../styles/CharactersList.css";

const CharactersList = ({ characters }) => {
  return (
    <table className="table table-borderless">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Nickname</th>
          <th scope="col">Birthday</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
        {characters.map((character) => (
          <tr>
            <th scope="row">{character.name}</th>
            <td>{character.nickname}</td>
            <td>{character.birthday}</td>
            <td>{character.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CharactersList;
