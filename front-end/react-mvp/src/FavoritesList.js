import React, { useEffect } from 'react'

const FavoritesList = (props) => {

    return (
        <div className='favoritesList'>
            <h1>Favorited Builds</h1>
            {/* {props.data.map((character) => {
               return character.favorite === 'Yes' ? <li>{props.getAllFavorites}</li> : <></>
            }
            )} */}
            <ul>{props.data.map((favorite) =><li>{favorite.character_type}</li>)}</ul>
        </div>
    )
}

export default FavoritesList
