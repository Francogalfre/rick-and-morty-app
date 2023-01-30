import React from "react";

const useApiFetch = () => {
  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(false);

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

  return { character, loading }
}

export default useApiFetch