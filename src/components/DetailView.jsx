import React, { Component } from "react";
import * as api from "../utils/api";
import "../components/styles/DetailView.css";
import "./styles/App.css";

class DetailView extends Component {
  state = {
    id: "",
    image: "",
    isVisible: false,
  };

  componentDidMount() {
    api.getPokemon();
  }

  render() {
    return (
      <div className="data-wrapper">
        <div key={this.id} className="detail-view">
          <button onClick={this.handleClick}>
            <div>
              {this.state.isVisible ? <p>hide</p> : <p>show</p>} {this.props.id}
            </div>
          </button>
          {this.state.isVisible ? (
            <img className="sprite-image" src={this.state.image}></img>
          ) : null}
        </div>
      </div>
    );
  }

  handleClick = () => {
    this.setState({ isVisible: !this.state.isVisible });
    console.log("clicked with id ", this.props.id);
    api.getPokemon(this.props.id).then((res) => {
      const image = res.sprites.other.dream_world.front_default;
      console.log("IMAGE == ", image);

      this.setState({ image: image });
    });
  };
}

export default DetailView;
