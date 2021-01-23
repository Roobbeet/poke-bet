import React from 'react'
import {withRouter} from 'react-router-dom'
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

export default withRouter(OwnedPokelist);