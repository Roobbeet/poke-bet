import React from 'react';
import './main.styles.css'

const OwnedList = ({ ownedItem, releasePokemon }) => {

    const { name } = ownedItem.pokeID
    const { nickname } = ownedItem
    return (
        <div>
            <div className="item-container detail">
                <div className="col col-1">
                    <h4>Nickname: {nickname}</h4>
                    <h4>Type: {name}</h4>
                </div>
                <button onClick={() => releasePokemon(ownedItem.nickname)}>Release</button>
            </div>
        </div>
    )
}

export default React.memo(OwnedList); 