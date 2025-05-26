import styles from "./pokemonContent.module.css";
import Image from "next/image";
import { PokemonProps } from "./PokemonContent";

const typeDetails = (type: string) => {
  switch (type) {
    case "normal":
      return { backgroundColor: "#A8A77A", icon: "normal.svg" };
    case "fire":
      return { backgroundColor: "#EE8130", icon: "fire.svg" };
    case "water":
      return { backgroundColor: "#6390F0", icon: "water.svg" };
    case "electric":
      return { backgroundColor: "#F7D02C", icon: "electric.svg" };
    case "grass":
      return { backgroundColor: "#7AC74C", icon: "grass.svg" };
    case "ice":
      return { backgroundColor: "#96D9D6", icon: "ice.svg" };
    case "fighting":
      return { backgroundColor: "#C22E28", icon: "fighting.svg" };
    case "poison":
      return { backgroundColor: "#A33EA1", icon: "poison.svg" };
    case "ground":
      return { backgroundColor: "#E2BF65", icon: "ground.svg" };
    case "flying":
      return { backgroundColor: "#A98FF3", icon: "flying.svg" };
    case "psychic":
      return { backgroundColor: "#F95587", icon: "psychic.svg" };
    case "bug":
      return { backgroundColor: "#A6B91A", icon: "bug.svg" };
    case "rock":
      return { backgroundColor: "#B6A136", icon: "rock.svg" };
    case "ghost":
      return { backgroundColor: "#735797", icon: "ghost.svg" };
    case "dragon":
      return { backgroundColor: "#6F35FC", icon: "dragon.svg" };
    case "dark":
      return { backgroundColor: "#705746", icon: "dark.svg" };
    case "steel":
      return { backgroundColor: "#B7B7CE", icon: "steel.svg" };
    case "fairy":
      return { backgroundColor: "#D685AD", icon: "fairy.svg" };
    default:
      return { backgroundColor: "#878787", icon: "default.svg" };
  }
};

const PokemonCard = ({ pokemon }: { pokemon: PokemonProps }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h2>{pokemon.name}</h2>
        <div className={styles.health}>
          <Image src="heart.svg" alt="health" width={20} height={20} />
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
        {pokemon.types.map((type, index) => {
          const { backgroundColor, icon } = typeDetails(type);

          return (
            <div
              key={index}
              className={styles.type}
              style={{ border: `2px solid ${backgroundColor}` }}
            >
              <Image
                src={`/types/${icon}`}
                alt={`${icon} icon`}
                width={25}
                height={25}
              />
              <p>{type}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PokemonCard;
