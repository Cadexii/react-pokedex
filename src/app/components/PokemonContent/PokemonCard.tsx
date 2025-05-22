import styles from "./pokemonContent.module.css";
import Image from "next/image";
import { PokemonProps } from "./PokemonContent";

const typeDetails = (type: string) => {
  switch (type) {
    case "normal":
      return { backgroundColor: "#A8A77A" };
    case "fire":
      return { backgroundColor: "#EE8130" };
    case "water":
      return { backgroundColor: "#6390F0" };
    case "electric":
      return { backgroundColor: "#F7D02C" };
    case "grass":
      return { backgroundColor: "#7AC74C" };
    case "ice":
      return { backgroundColor: "#96D9D6" };
    case "fighting":
      return { backgroundColor: "#C22E28" };
    case "poison":
      return { backgroundColor: "#A33EA1" };
    case "ground":
      return { backgroundColor: "#E2BF65" };
    case "flying":
      return { backgroundColor: "#A98FF3" };
    case "psychic":
      return { backgroundColor: "#F95587" };
    case "bug":
      return { backgroundColor: "#A6B91A" };
    case "rock":
      return { backgroundColor: "#B6A136" };
    case "ghost":
      return { backgroundColor: "#735797" };
    case "dragon":
      return { backgroundColor: "#6F35FC" };
    case "dark":
      return { backgroundColor: "#705746" };
    case "steel":
      return { backgroundColor: "#B7B7CE" };
    case "fairy":
      return { backgroundColor: "#D685AD" };
    default:
      return { backgroundColor: "#878787" };
  }
};

const PokemonCard = ({ pokemon }: { pokemon: PokemonProps }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2>{pokemon.name}</h2>
        <div className={styles.health}>
          <Image src="heart.svg" alt="heart.svg" width={20} height={20} />
          <p>: {pokemon.hp}</p>
        </div>
      </div>
      <Image
        className={styles.image}
        src={pokemon.image}
        alt={pokemon.name}
        width={200}
        height={200}
      />
      <div className={styles.types}>
        {pokemon.types.map((type, index) => (
          <div key={index} className={styles.type}>
            <p>{type}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
