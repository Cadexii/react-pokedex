"use client";

import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import styles from "./pokemonContent.module.css";

export type PokemonProps = {
  id: number;
  name: string;
};

const PokemonContent = () => {
  const [pokemonData, setPokemonData] = useState<PokemonProps | null>(null);
  const fetchPokemon = async () => {
    await fetch("https://pokeapi.co/api/v2/pokemon?limit=5")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPokemonData({ id: res.id, name: res.name });
      })
      .catch(() => console.log("Error fetching data"));
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return <h1>a</h1>;
};

export default PokemonContent;
