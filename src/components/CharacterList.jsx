import React, { useEffect, useState } from "react";

// Components
import Character from "./Character";
import "./css/characterList.css";

const CharacterList = () => {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${page}`
      );
      const data = await response.json();

      setLoading(false);
      setCharacter(data.results);
    }

    fetchData();
  }, [page]);

  return (
    <div>
      {loading == true ? (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      ) : (
        <div className="character-container">
          {character.map((character, index) => {
            return <Character character={character} key={index} />;
          })}
        </div>
      )}

      <div className="pagination">
        {page <= 1 ? (
          <button className="page-button hidden">⬅ Prev Page</button>
        ) : (
          <button className="page-button" onClick={() => setPage(page - 1)}>
            ⬅ Prev Page
          </button>
        )}

        <span className="page-number">Page: {page} / 42</span>
        <button className="page-button" onClick={() => setPage(page + 1)}>
          Next Page ➡
        </button>
      </div>
    </div>
  );
};

export default CharacterList;
