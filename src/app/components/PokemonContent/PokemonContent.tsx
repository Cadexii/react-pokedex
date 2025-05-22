"use client";

import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import styles from "./pokemonContent.module.css";

export type PokemonProps = {
  id: number;
  name: string;
  hp: number;
  image: string;
  types: string[];
};

const PokemonContent = () => {
  const [pokemonList, setPokemonList] = useState<PokemonProps[]>([]);

  const fetchPokemon = async () => {
    await fetch("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then((res) => res.json())
      .then(async (res) => {
        const detailedPokemon = await Promise.all(
          res.results.map(async (pokemon: { name: string; url: string }) => {
            const data = await fetch(pokemon.url).then((res) => res.json());
            return {
              id: data.id,
              name: data.name.charAt(0).toUpperCase() + data.name.slice(1),
              hp: data.stats[0].base_stat,
              image: data.sprites.other["official-artwork"].front_default,
              types: data.types.map(
                (type: { type: { name: string } }) => type.type.name
              ),
            };
          })
        );
        setPokemonList(detailedPokemon);
        console.log(res.results);
      })
      .catch(() => console.log("Error fetching data"));
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className={styles.content}>
      {pokemonList.map((pokemon) => (
        <PokemonCard key={pokemon.name} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default PokemonContent;
