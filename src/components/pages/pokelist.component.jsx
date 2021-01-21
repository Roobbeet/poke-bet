import React from 'react'
// import './common.style.css';
import ListItem from '../list/list.component'
import PokemonListContext from '../contexts/list.context'

const Pokelist = () => {
    return (
        <div className="pokelist-page">
            <PokemonListContext.Consumer>
            {
            (list) => (
                   list.map(item => 
                    <ListItem isOwned={item.isDone}
                    key={`${item.name}`} itemName={item.name} url={item.url}></ListItem>
                )
            )
            }
            </PokemonListContext.Consumer>
        </div>
    )
}

export default Pokelist;