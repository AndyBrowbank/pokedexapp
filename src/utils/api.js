import axios from "axios";

export const getPokemon = (id) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id} `).then((res) => {
    console.log(res.data);

    // const pokemonImage = res.data.sprites.other.dream_world.front_default;
    const allPokeData = res.data;
    return allPokeData;
  });
};
