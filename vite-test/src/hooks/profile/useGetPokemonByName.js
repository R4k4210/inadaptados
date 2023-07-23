import { useEffect, useState } from "react";

const useGetPokemonByName = (name) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(`Cannot get pokemon by name from API: ${err}`))
      .finally(() => setIsLoading(false));
  }, [name]);

  return {
    data,
    error,
    isLoading,
  };
};

export default useGetPokemonByName;
