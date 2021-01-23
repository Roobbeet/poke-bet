import React from 'react'
import {withRouter} from 'react-router-dom'
// import './search.style.css';
import DetailedItem from '../list/detail.component'
import DetailedPokemonContext from '../contexts/detailed.context'


const DetailedPokemon = () => {
    return (
        <div className="pokelist-page">
            {   
                <DetailedPokemonContext.Consumer>
                    {({currentItem, catchPokemon}) => (
                        <DetailedItem currentItem={currentItem} catchPokemon={catchPokemon}>
                        </DetailedItem>
                    )
                    }
                </DetailedPokemonContext.Consumer>
            }
        </div>
    )
}

export default DetailedPokemon;