import React from 'react';
import './list.styles.css'

const ListItem = ({ itemName, isOwned, selectPokemon, ownNo, url }) => {
    return (
        <div className={`item-container ${isOwned ? 'done-task' : ''}`} >
            <h4 onClick={() => selectPokemon(url)} className={`item-name ${isOwned ? 'done-task' : ''}`} >{itemName}</h4>
            <h4 className='no-owned'>{`Have ${ownNo} Pokemon(s)`}</h4>
        </div>
    )
}

export default React.memo(ListItem);
// onClick={() => catchPokemon(pokeDetail)}