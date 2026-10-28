import {  useState } from "react";

const URL = "https://pokeapi.co/api/v2/pokemon/pikachu"

function Pokemon() {
  const [pokemones, setPokemones] = useState(null)

  const [buscar,setBuscar] = useState(null)


  async function traerPokemones() {
    try {
      const traerPokemon= await fetch(
        `https://pokeapi.co/api/v2/pokemon/${buscar}`,
      );
      const pokemon = await traerPokemon.json();
      console.log(pokemon);
      setPokemones(pokemon)
    } catch (error) {
      console.log("Hubo un error", error);
    }
 }

  return (
    <>
      <input type="text" placeholder="ingrese un pokemon" onChange={event => setBuscar(event.target.value)}/>
      <button onClick={traerPokemones}>click me</button>
      {pokemones ?
        <>
          <h3>{pokemones.name}</h3>
          <img src={pokemones.sprites.front_shiny} alt="" />
          <p>{ pokemones.abilities[0].ability.name }</p>
        </>
        :
        <>cargando...</>}
    </>
  );
}

export default Pokemon;
