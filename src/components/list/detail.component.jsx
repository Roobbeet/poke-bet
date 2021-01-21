import React from 'react';
import './list.styles.css'

const DetailedItem = ({currentItem, catchPokemon}) => {  
    console.log(currentItem)
    const {types, moves, sprites} = currentItem
    console.table(types)
    return (
        <div>
            <div className="mon-pict">
                {
                    sprites ? null : null
                }
                {/* <img src={sprites.front_default} alt="front default"/>
                <img src={sprites.back_default} alt="front default"/> */}
            </div>
            <div className="mon-details">
                {currentItem[0] ? <h2 className="no">{types[0]} Hi</h2> : null}
                <h2 className="no"> Hi</h2>
                {/* <h2 className='no-owned'>{moves[0]} Hi2</h2> */}
            </div>
            <div className="catch-btn">
                <button onClick={() => catchPokemon(currentItem.name)}>Catch</button>
            </div>
        </div>
    )
}

export default React.memo(DetailedItem); 