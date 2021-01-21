import React from 'react'
// import './search.style.css';
import DetailedItem from '../list/detail.component'
import DetailedPokemonContext from '../contexts/detailed.context'


const DetailedPokemon = (pokeDetail) => {
    console.log(pokeDetail);
    return (
        <div className="pokelist-page">
            {   
                // <DetailedPokemonContext.Consumer>
                <DetailedItem></DetailedItem>
                // </DetailedPokemonContext.Consumer>
            }
        </div>
    )
}

export default DetailedPokemon;