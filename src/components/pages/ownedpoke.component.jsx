import React from 'react'
// import './search.style.css';
import OwnedList from '../list/ownedlist.component'
import OwnedPokemonContext from '../contexts/owned.context'
import ListItem from "../list/list.component";


const OwnedPokelist = () => {
    return (
        <div className="ownedlist-page">
                <OwnedPokemonContext.Consumer>
                    {
                        ({ owned, releasePokemon }) => 
                            // if (owned) {
                                owned.map(ownedItem => (
                                    <OwnedList
                                        ownedItem={ownedItem}
                                        releasePokemon={releasePokemon}
                                    >
                                    </OwnedList>
                                ))
                            // }
                        
                    }
                </OwnedPokemonContext.Consumer>
        </div>
    )
}

export default OwnedPokelist;