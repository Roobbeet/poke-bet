import React from 'react';
import './list.styles.css'

const DetailedItem = ({ currentItem, catchPokemon, popUpActive, updateOwned }) => {
    // console.log(currentItem);
    // console.log(catchPokemon)
    const { types, moves, sprites } = currentItem
    let nickName = null;
    const handleChange = async event => {
        const {value} = await event.target
        nickName = value
      }
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
            <div className={`nickname-form ${popUpActive ? null : `hidden`}`}>
                <h1>You Got It! Give it a cool name, will ya?</h1>
                <input type="text" onChange={handleChange}/>
                <button onClick={() => updateOwned(currentItem, nickName)}>Add Nickname</button>
            </div>
            <div className={`catch-btn ${!popUpActive ? null : `hidden`}`}>
                <button onClick={() => catchPokemon(currentItem)}>Catch</button>
            </div>
        </div>
    )
}

export default React.memo(DetailedItem); 