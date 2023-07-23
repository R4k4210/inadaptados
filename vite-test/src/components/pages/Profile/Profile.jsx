import { useParams } from "react-router-dom";
import useGetPokemonByName from "../../../hooks/profile/useGetPokemonByName";

const Profile = () => {
  const { name } = useParams();
  const { data, error, isLoading } = useGetPokemonByName(name);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {error && <p>{error}</p>}

      {data && (
        <img
          src={data.sprites.other["official-artwork"].front_default}
          alt={data.name}
        />
      )}
    </>
  );
};

export default Profile;
