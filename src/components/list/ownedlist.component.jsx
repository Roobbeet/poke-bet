import React from 'react';
import './list.styles.css'

const OwnedList = ({ ownedItem, releasePokemon }) => {

    const { types, moves, sprites } = ownedItem
    console.log(ownedItem)
    return (
        <div>
            <div className="mon-details">
                <div className="types">
                    <h1>{ownedItem.name}</h1>
                </div>
                <div className="moves">
                    {/* {
                        currentItem ?
                            currentItem.moves.map(el => <p className="no">{el.move.name}</p>) : null
                    } */}
                </div>
            </div>
            <div className="catch-btn">
                <button onClick={() => releasePokemon(ownedItem)}>Release</button>
            </div>
        </div>
    )
}

export default React.memo(OwnedList); 