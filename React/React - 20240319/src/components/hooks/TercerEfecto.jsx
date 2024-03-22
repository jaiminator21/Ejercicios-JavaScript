import { useEffect, useState } from "react";

const TercerEfecto = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const charactersApi = await fetch(
        "https://digimon-api.vercel.app/api/digimon"
      );
      const charactersJson = await charactersApi.json();
      // console.log(charactersJson);
      setCharacters(charactersJson);
    };
    getCharacters();
  }, []);

  return (
    <div>
      <h2>TercerEfecto</h2>
      {characters.length ? (
        <ul>
          {characters.map((character) => (
            <li key={character.name}>{character.name}</li>
          ))}
        </ul>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
};

export default TercerEfecto;
