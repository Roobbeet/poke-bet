import React from 'react'
// import './search.style.css';
import ListItem from '../list/list.component'


const OwnedPokelist = (pokeDetail) => {
    console.log(pokeDetail);
    return (
        <div className="pokelist-page">
            {
                <ListItem></ListItem>
            }
        </div>
    )
}

export default OwnedPokelist;