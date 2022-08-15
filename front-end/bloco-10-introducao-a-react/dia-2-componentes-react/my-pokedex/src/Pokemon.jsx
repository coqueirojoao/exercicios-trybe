import React from "react";
import PropTypes from 'prop-types'

class Pokemon extends React.Component {
    render() {
        const { pokemons } = this.props
    return(<div className="poke-div">
        <li>
            {pokemons.name}
        </li>
        <li>
            {pokemons.type}
        </li>
        <li>
            {pokemons.averageWeight.value}.{pokemons.averageWeight.measurementUnit}
        </li>
        <img src={pokemons.image} alt='pokemonimage'></img>
        </div>);
    }
}

Pokemon.propTypes = {
    pokemons: PropTypes.shape({}).isRequired
}

export default Pokemon;