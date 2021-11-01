import React from "react";
import Pokemon from "../../components/Pokemon";
import DATA from "../../assets/pokemons";
import Header from "../../components/Pokemon/Header";

class Home extends React.Component {
    
    constructor (props) {
        super(props)
        this.state = {pokemons:[], loading: false, showButton: true};
    }

    componentDidMount() {
        
    }

    getData = () => {
        this.setState({showButton: false, loading: true});
        setTimeout(() => {
        this.setState({pokemons:DATA, loading: false, showButton: false})
        }, 3000);
    }

    handleChange = (evt) => {
        const text = evt.target.value;

        const filterData = DATA.filter((pokemon)=>{
            return pokemon.name.english.toLowerCase().includes(text.toLowerCase());
        });

        this.setState({pokemons: filterData})
    }

    selectPokemon = (pokemon, evt) => {
        console.log(pokemon)
    }

    render () {
        return (<>
            
            <Header title="Pokedex"></Header>

            <div className="container-input">
                {!this.state.showButton && !this.state.loading && <input type="text" onChange={this.handleChange}></input>}
            </div>
            
   
            <div className="container-pokemons">
                
                {this.state.showButton && (<button onClick={this.getData}>Get Data</button>)}
                {this.state.loading && "Loading..."}
                {!this.state.loading && this.state.pokemons.map((item) => (
                    <Pokemon
                        key={item.id}
                        name={item.name.english} 
                        photo={item.image}
                        hp={item.base.HP}
                        atk={item.base.Attack}
                        def={item.base.Defense}
                        types={item.type}
                        onSelect={(e) => this.selectPokemon(item, e)}
                    />
                ))}

            </div>
        </>)
    }
}

export default Home;