import React from 'react';
import './list.styles.css'

const ListItem = ({ itemName, isOwned, selectPokemon, ownNo, url }) => {
    return(
        <div className={`item-container ${isOwned ? 'done-task' : ''}`} >
            <h2 onClick={() => selectPokemon(url)} className={`item-name ${isOwned ? 'done-task' : ''}`} >{itemName}</h2>
            <h2 className='no-owned'>{`Have ${ownNo} Pokemon(s)`}</h2>
        </div>
    )
}

export default React.memo(ListItem); 
// onClick={() => catchPokemon(pokeDetail)}