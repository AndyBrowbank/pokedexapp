import React, { Component } from "react";
import "./components/styles/App.css";

import axios from "axios";
import Pokecard from "./components/DetailView.jsx";
import SideBar from "./components/SideBar";
import PokeList from "./components/PokeList";
class App extends Component {
  state = {
    // pokemons: [],
    // pokemonClick: "",
  };

  // componentDidMount() {
  //   return axios.get("https://pokeapi.co/api/v2/pokemon/ ").then((res) => {
  //     this.setState({ pokemons: res.data.results });
  //     console.log("STATE ", this.state);
  //   });
  // }
  render() {
    return (
      <div className="App">
        <PokeList />
        <SideBar />
        <SideBar />
      </div>
    );
    // const { pokemons } = this.state;
    // const pokemonList = pokemons.map((pokemon) => {
    //   console.log(pokemon);
    //   return (
    //     <Pokecard
    //       pokemon={pokemon}
    //       handleClick={this.handleClick}
    //       id={pokemon.name}
    //     />
    //   );
    // });
    // return (
    //   <div className="poke-list">
    //     {pokemonList}
    //     <h2 className="side-card">SideCard</h2>
    //   </div>
    // );
    // }
    // handleClick = (id) => {
    //   console.log("clicked - called from pokeCard", " ID = ", id);
    // };
  }
}
export default App;
