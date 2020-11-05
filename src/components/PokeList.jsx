import React, { Component } from "react";
import "../components/styles/App.css";
import "../components/styles/PokeList.css";
import axios from "axios";
import Pokecard from "./DetailView";
import DetailView from "./DetailView";

class PokeList extends Component {
  state = {
    pokemons: [],
    pokemonClick: "",
  };

  componentDidMount() {
    return axios.get("https://pokeapi.co/api/v2/pokemon/ ").then((res) => {
      this.setState({ pokemons: res.data.results });
      console.log("STATE ", this.state);
    });
  }
  render() {
    const { pokemons } = this.state;
    const pokemonList = pokemons.map((pokemon) => {
      console.log(pokemon);
      return (
        <DetailView
          pokemon={pokemon}
          handleClick={this.handleClick}
          id={pokemon.name}
        />
      );
    });
    return <div className="poke-list">{pokemonList}</div>;
  }
  handleClick = (id) => {
    console.log("clicked - called from pokeCard", " ID = ", id);
  };
}

export default PokeList;
