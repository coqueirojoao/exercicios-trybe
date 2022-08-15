import React from "react";
import Pokemon from "./Pokemon";
import pokemons from "./data";


class Pokedex extends React.Component {
    render() {
        return(
            pokemons.map((poke) => <Pokemon pokemons={poke} key={poke.id} />
        ))
    }
}

export default Pokedex;