import React, { useEffect, useState }  from "react";
import Buttons from "./Buttons";
import Character from "./Character";
import FavoritesList from "./FavoritesList";
import Titlebar from "./Titlebar";

const App = () => {
  const [data, setData] = useState([])
  const [favorites, setFavorite] = useState([])
  const [updated, setUpdated] = useState(0)
  // const [selectedFav, setSelectedFav] = useState(props.characters.character_type)

  useEffect(() => {getAllFavorites()}, [updated])

//fetch request for all builds
  const getAllData = () => {
    fetch("http://127.0.0.1:3000/api/characters")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setData(result)
        })
      .catch(error => {
        console.error(error)
      })
  }

  const updateFavorites = () => {
    setUpdated(updated + 1)
  }
//fetch request for favorited builds to update favorite builds list
  const getAllFavorites = () => {
    fetch("http://127.0.0.1:3000/api/characters/favorite")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setFavorite(result)
        })
      .catch(error => {
        console.error(error)
      })
  }
//fetch request for favorited builds that popultae character tiles
  const getAllFavoritesData = () => {
    fetch("http://127.0.0.1:3000/api/characters/favorite")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setData(result)
        })
      .catch(error => {
        console.error(error)
      })
  }
//fetch request for amazon builds
  const getAmazonData = () => {
    fetch("http://127.0.0.1:3000/api/characters/amazon")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setData(result)
        })
      .catch(error => {
        console.error(error)
      })
  }
//fetch request for paladin builds
  const getPaladinData = () => {
    fetch("http://127.0.0.1:3000/api/characters/paladin")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setData(result)
        })
      .catch(error => {
        console.error(error)
      })
  }
//fetch request for sorceress builds
  const getSorceressData = () => {
    fetch("http://127.0.0.1:3000/api/characters/sorceress")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setData(result)
        })
      .catch(error => {
        console.error(error)
      })
  }
  //fetch request for barbarian builds
  const getBarbarianData = () => {
    fetch("http://127.0.0.1:3000/api/characters/barbarian")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result)
          setData(result)
        })
      .catch(error => {
        console.error(error)
      })
  }

  return (
    <>
      <Titlebar />
      <Buttons getAllData={getAllData} getAmazonData={getAmazonData} getPaladinData={getPaladinData} getSorceressData={getSorceressData} getBarbarianData={getBarbarianData} getAllFavorites={getAllFavoritesData}/>
      <div className="allCards">
        {data.map(characters => <Character key={characters.character_id} characters={characters} updateFavorites={updateFavorites} />)}
      </div>
      <FavoritesList data={favorites} />
    </>
  )
}
export default App;