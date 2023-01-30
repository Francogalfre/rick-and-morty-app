import React, { useState, useEffect } from "react";

const useApiFetch = () => {
  // useState
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

  return { page, character, loading, setPage }
}

export default useApiFetch