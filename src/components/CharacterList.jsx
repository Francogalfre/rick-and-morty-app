// Components
import Character from "./Character";
import "../css/characterList.css";

// Hooks
import useApiFetch from "../hooks/useApiFetch";
import { useState } from "react";

const CharacterList = () => {
  const [filter, setFilter] = useState(false)

  // Filter Characters
  const handleFilter = () => {
    setFilter(!filter)
  }

  // Api Fetch Hook
  const { page, character, loading, setPage } = useApiFetch({ filter })

  return (
    <div>
      <div className="filter">
        <form>
          <label htmlFor="">Filter Alive</label>
          <input type="checkbox" className="checkbox" onClick={handleFilter} />
        </form>
      </div>

      {loading == true ? (
        <div className="loading" title="loading" >
          <div className="spinner"></div>
        </div>
      ) : (
        <div title="list" className="character-container">
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

        <span title="page" className="page-number">Page: {page} / 42</span>
        <button className="page-button" onClick={() => setPage(page + 1)}>
          Next Page ➡
        </button>
      </div>
    </div>
  );
};

export default CharacterList;
