import React from 'react';
import './list.styles.css'

const ListItem = (pokeDetail) => {
    const { itemName, isOwned, catchPokemon, ownNo } = pokeDetail;
    return(
        <div className={`item-container ${isOwned ? 'done-task' : ''}`} >
            <h2 className={`item-name ${isOwned ? 'done-task' : ''}`} >{itemName}</h2>
            <h2 className='no-owned'>{`${ownNo} Pokemon(s)`}</h2>
            <div onClick={() => catchPokemon(pokeDetail)} className={`remove-button ${isOwned ? 'hidden' : ''}`} >Catch More</div>
        </div>
    )
}

export default React.memo(ListItem); 