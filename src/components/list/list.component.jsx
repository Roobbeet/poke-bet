import React from 'react';
import './list.styles.css'

const ListItem = ({ itemName, isOwned, selectPokemon, ownNo, url }) => {
    return (
        <div className={`item-container`} >
            <h4 onClick={() => selectPokemon(url)} className={`item-name`} >{itemName}</h4>
            <h4 className='no-owned'>{`Have ${isOwned} Pokemon(s)`}</h4>
        </div>
    )
}

export default React.memo(ListItem);
// onClick={() => catchPokemon(pokeDetail)}