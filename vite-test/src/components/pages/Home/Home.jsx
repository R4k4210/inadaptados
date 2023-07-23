import PreviewLink from "../../shared/PreviewLink/PreviewLink";
import useGetPokemon from "../../../hooks/home/useGetPokemon";
import "./Home.css";

const Home = () => {
  const { data, error, isLoading } = useGetPokemon();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="pokemones">
      {error && <p>{error}</p>}

      {data.map((pokemon) => (
        <PreviewLink key={pokemon.name} name={pokemon.name} />
      ))}
    </div>
  );
};

export default Home;
