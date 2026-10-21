import { useEffect, useState } from "react";

const URL = "https://pokeapi.co/api/v2/pokemon/pikachu"

function Pokemon() {
  const [pokemones, setPokemones] = useState(null)

  useEffect(() => {
    async function traerPokemones() {
      try {
        const traerPokemon= await fetch(
          "https://pokeapi.co/api/v2/pokemon/pikachu",
        );
        const pokemon = await traerPokemon.json();
        console.log(pokemon);
        setPokemones(pokemon)
      } catch (error) {
        console.log("Hubo un error", error);
      }
   }
    traerPokemones();
  }, []);


  return (
    <>
      {pokemones ? pokemones.name : <>cargando...</> }
    </>
  );
}

export default Pokemon;
