import React from 'react';
import './list.styles.css'

const DetailedItem = ({ currentItem, catchPokemon }) => {
    console.log(currentItem);
    console.log(catchPokemon)
    const { types, moves, sprites } = currentItem
    console.table(types)
    return (
        <div>
            <div className="mon-pict">
                {
                    currentItem ?
                        <img src={currentItem.sprites.front_default} alt="front default" /> : null
                }
                {
                    currentItem ?
                        <img src={sprites.back_default} alt="back default" /> : null
                }
            </div>
            <div className="mon-details">
                <div className="types">
                    {
                        currentItem ?
                            currentItem.types.map(el => <p className="no">{el.type.name}</p>) : null
                    }
                </div>
                <div className="moves">
                    {
                        currentItem ?
                            currentItem.moves.map(el => <p className="no">{el.move.name}</p>) : null
                    }
                </div>
            </div>
            <div className="catch-btn">
                <button onClick={() => catchPokemon(currentItem.name)}>Catch</button>
            </div>
        </div>
    )
}

export default React.memo(DetailedItem); 