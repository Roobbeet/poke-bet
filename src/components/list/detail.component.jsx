import React from 'react';
import './list.styles.css'

const DetailedItem = (pokeDetail) => {
    
    const { itemName, isOwned, handleOpen, ownNo, pictureUrl } = pokeDetail;
    console.log(pokeDetail, handleOpen)
    return (
        <div className={`item-container ${isOwned ? 'done-task' : ''}`} >
            <div className="mon-pict">
                <img src={pictureUrl} alt={itemName}/>
            </div>
            <div className="mon-details">
                <h2 className={`item-name ${isOwned ? 'done-task' : ''}`} >{itemName}</h2>
                <h2 className='no-owned'>{isOwned ? `Owned: ${ownNo}` : `Catch Now!`}</h2>
                <div onClick={() => handleOpen(pokeDetail)} className={`remove-button ${isOwned ? 'hidden' : ''}`} ><i className="far fa-times-circle"></i></div>
            </div>
        </div>
    )
}

export default React.memo(DetailedItem); 