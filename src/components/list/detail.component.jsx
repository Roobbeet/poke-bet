import React from 'react';
import './main.styles.css'

const DetailedItem = ({ currentItem, catchPokemon, popUpActive, updateOwned }) => {
    const { types, moves, sprites, name } = currentItem;
    let nickName = '';
    const handleChange = async event => {
        const { value } = await event.target
        nickName = value
    }
    return (
        <div >
            <h1>{name}</h1>
            <div className="item-container">
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
                <div className="types">
                    <h4>Types</h4>
                    <div className="type-items">
                        {
                            currentItem ?
                                types.map(el => <p className="no">{el.type.name}</p>) : null
                        }
                    </div>

                </div>
            </div>
            <div className="mon-details">
                <h5>Moves</h5>
                <div className="moves">
                    {
                        currentItem ?
                            moves.map(el => <p>{el.move.name}</p>) : null
                    }
                </div>
            </div>
            <div className={`nickname-form ${popUpActive ? null : `hidden`}`}>
                <h3>You Got It! Give it a cool name, will ya?</h3>
                <form action="" onSubmit={(event) => updateOwned(currentItem, nickName, event)}>
                    <input type="text" onChange={handleChange} />
                    <button >Add Nickname</button>
                </form>
            </div>
            <div className={`catch-btn ${!popUpActive ? null : `hidden`}`}
            >
                <button onClick={() => catchPokemon(currentItem)}>Catch</button>
            </div>
        </div>
    )
}

export default React.memo(DetailedItem); 