import { useEffect, useState } from "react";

const useGetPokemon = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((data) => setData(data.results))
      .catch((err) => setError(`Cannot get pokemons from API: ${err}`))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, error, isLoading };
};

export default useGetPokemon;
