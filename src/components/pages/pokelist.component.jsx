import React from "react";
// import './common.style.css';
import ListItem from "../list/list.component";
import PokemonListContext from "../contexts/list.context";
import OwnedPokemonContext from "../contexts/owned.context";
import { Link, BrowserRouter as Router } from 'react-router-dom'

const Pokelist = ({catchPokemon}) => {
    return (
        <div className="pokelist-page">
            <PokemonListContext.Consumer>
                {(list) =>
                    list.map((item) => (
                        <OwnedPokemonContext>
                            {(owned) => ( //get the list
                            <Router>
                                <Link to='/detailed'>
                                <ListItem
                                    catchPokemon={catchPokemon}
                                    isOwned={item.isDone}
                                    key={`${item.name}`}
                                    ownNo={owned.includes(item.name)}
                                    itemName={item.name}
                                    url={item.url}
                                ></ListItem>
                                </Link>
                            </Router>
                            )}
                        </OwnedPokemonContext>
                    ))
                }
            </PokemonListContext.Consumer>
        </div>
    );
};

export default Pokelist;
