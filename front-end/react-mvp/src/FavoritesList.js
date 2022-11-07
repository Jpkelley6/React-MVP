import React, { useEffect } from 'react'

const FavoritesList = (props) => {

    return (
        <div className='favoritesList'>
            <h1>Favorited Builds</h1>
            <ul>{props.data.map((favorite) =><li>{favorite.character_type}</li>)}</ul>
        </div>
    )
}

export default FavoritesList
