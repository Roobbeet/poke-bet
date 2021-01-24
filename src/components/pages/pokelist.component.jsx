import React from "react";
// import './common.style.css';
import ListItem from "../list/list.component";
import PokemonListContext from "../contexts/list.context";
import OwnedPokemonContext from "../contexts/owned.context";
import { Link } from 'react-router-dom'

const Pokelist = () => {
    return (
        <div className="pokelist-page">
            <PokemonListContext.Consumer>
                {({list, selectPokemon}) =>
                    list.map((item) => (
                        <OwnedPokemonContext>
                            {({ owned, releasePokemon }) => ( //get the list
                                <Link to='/detailed'>
                                <ListItem
                                    selectPokemon={selectPokemon}
                                    isOwned={owned.filter(el => el.pokeID.name === item.name).length}
                                    key={`${item.name}`}
                                    itemName={item.name}
                                    url={item.url}
                                ></ListItem>
                                </Link>
                            )}
                        </OwnedPokemonContext>
                    ))
                }
            </PokemonListContext.Consumer>
        </div>
    );
};

export default Pokelist;
