import React from 'react'
// import './search.style.css';
import DetailedItem from '../list/detail.component'


const DetailedPokemon = (pokeDetail) => {
    console.log(pokeDetail);
    return (
        <div className="pokelist-page">
            {
                <DetailedItem></DetailedItem>
            }
        </div>
    )
}

export default DetailedPokemon;