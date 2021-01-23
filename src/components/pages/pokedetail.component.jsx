import React from "react";
import { withRouter } from "react-router-dom";
// import './search.style.css';
import DetailedItem from "../list/detail.component";
import DetailedPokemonContext from "../contexts/detailed.context";

const DetailedPokemon = () => {
  return (
    <div className="detailed-page">
      {
        <DetailedPokemonContext.Consumer>
          {({ currentItem, catchPokemon, popUpActive, updateOwned }) => (
            <DetailedItem
              currentItem={currentItem}
              catchPokemon={catchPokemon}
              popUpActive={popUpActive}
              updateOwned={updateOwned}
            ></DetailedItem>
          )}
        </DetailedPokemonContext.Consumer>
      }
    </div>
  );
};

export default DetailedPokemon;
