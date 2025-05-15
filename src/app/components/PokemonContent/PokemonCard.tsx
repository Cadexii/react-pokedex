import styles from "./pokemonContent.module.css";
import { PokemonProps } from "./PokemonContent";

type Props = {
  pokemon: PokemonProps;
};

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  return (
    <div className={styles.card}>
      <h2>{pokemon.name}</h2>
    </div>
  );
};

export default PokemonCard;
