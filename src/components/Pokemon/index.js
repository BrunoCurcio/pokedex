import React from 'react';
import Proptypes from "prop-types";
import { handleGenerateBg } from '../../utils';

class Pokemon extends React.Component {
    render () {

        const bgPokemon = handleGenerateBg(this.props.types[0]);
        return (
            <div className="pokemon" style={{background: bgPokemon, borderColor: bgPokemon}} onClick={this.props.onSelect}>

                <img 
                src={this.props.photo || "https://img1.gratispng.com/20171220/ofe/pokeball-png-5a3ab8044b97e7.8086813315137976363096.jpg"} 
                alt={`Pokemon ${this.props.name}`}
                className="pokemon-image"
                />
              
                <h2>{this.props.name}</h2>

                <ul className="pokemon-info">
                    <li>HP: {this.props.hp}</li>
                    <li>ATK: {this.props.atk}</li>
                    <li>DEF: {this.props.def}</li>
                </ul>

                <div>
                    {this.props.types.join(" | ")}
                </div>

            </div>
        )
    }
}

Pokemon.propTypes = {
    name: Proptypes.string.isRequired,
    photo: Proptypes.string,
    hp: Proptypes.number.isRequired,
    atk: Proptypes.number.isRequired,
    def: Proptypes.number.isRequired,
    types: Proptypes.arrayOf(Proptypes.string),
    onSelect: Proptypes.func.isRequired,
}

export default Pokemon;