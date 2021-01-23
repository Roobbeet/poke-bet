import React from 'react';
import './list.styles.css'

const OwnedList = ({ ownedItem, releasePokemon }) => {

    const { types, moves, sprites, name } = ownedItem.pokeID
    const { nickname } = ownedItem
    console.log(types, moves, sprites)
    return (
        <div>
            <div className="mon-details">
                <div className="types">
                    <h1>{nickname} {name}</h1>
                </div>
                <div className="moves">
                    {/* {
                        currentItem ?
                            currentItem.moves.map(el => <p className="no">{el.move.name}</p>) : null
                    } */}
                </div>
            </div>
            <div className="catch-btn">
                <button onClick={() => releasePokemon(ownedItem.nickname)}>Release</button>
            </div>
        </div>
    )
}

export default React.memo(OwnedList); 