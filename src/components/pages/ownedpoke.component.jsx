import React from 'react'
import {withRouter} from 'react-router-dom'
// import './search.style.css';
import OwnedList from '../list/ownedlist.component'
import OwnedPokemonContext from '../contexts/owned.context'


const OwnedPokelist = (pokeDetail) => {
    console.log(pokeDetail);
    return (
        <div className="pokelist-page">
            {
                <OwnedPokemonContext.Consumer>
                    {
                        ({ownedList, releasePokemon}) => {
                            ownedList.map(el => (
                                <OwnedList
                                el={el}
                                releasePokemon={releasePokemon}
                                >
                                </OwnedList>
                            ))
                        }
                    }
                </OwnedPokemonContext.Consumer>
            }
        </div>
    )
}

export default OwnedPokelist;