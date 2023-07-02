import { useEffect, useState } from "react";

const Layout = () => {
  const [pokemonId, setPokemonId] = useState("");
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    console.log("pokemonId", pokemonId);
  }, [pokemonId]);

  const fetchPokemonById = async (id) => {
    if (id === "") return;

    try {
      const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const parsedResult = await result.json();
      console.log("result", parsedResult);
      setPokemon(parsedResult);
    } catch (error) {
      console.log(`El pokemon de ID ${id} no existe.`, error);
    }
  };

  const handleOnChange = (event) => {
    setPokemonId(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    fetchPokemonById(pokemonId);
  };

  return (
    <>
      <h1>Pokemon</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" value={pokemonId} onChange={handleOnChange} />
        <button>Buscar</button>
      </form>

      {pokemon && (
        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
        />
      )}
    </>
  );
};

export default Layout;
