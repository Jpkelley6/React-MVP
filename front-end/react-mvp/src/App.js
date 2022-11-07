import React, { useEffect, useState }  from "react";
import Buttons from "./Buttons";
import Character from "./Character";
import FavoritesList from "./FavoritesList";
import Titlebar from "./Titlebar";
import {Howl} from 'howler'
import DiabloTheme from './PageMusic.mp3'

const App = () => {
  const [data, setData] = useState([])
  const [favorites, setFavorite] = useState([])
  const [updated, setUpdated] = useState(0)
  

//useEffect runs on render, and populates the favorited builds list on the favortes window on each render, so it dynamically updates when you update the state.
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
//funtion to update state to re-render page; drilled down to character compnonent and called inside the set and remove favorite functions
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
          setUpdated()
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

  const pageMusic = new Howl ({
    src: DiabloTheme,
    html5: true,
    volume: .2
  })

  return (
    <>
      <Titlebar />
      <p className='welcome'>Welcome to the Diablo II Sets page. Click below on a base class to see popular build choices and common gear sets. You can favorite a build by clicking on the button and populate it to your favorites list to reference again later</p>
      <Buttons getAllData={getAllData} getAmazonData={getAmazonData} getPaladinData={getPaladinData} getSorceressData={getSorceressData} getBarbarianData={getBarbarianData} getAllFavorites={getAllFavoritesData}/>
      <div className="allCards">
        {data.map(characters => <Character key={characters.character_id} characters={characters} updateFavorites={updateFavorites} getAllFavoritesData={getAllFavoritesData} />)}
      </div>
      <FavoritesList data={favorites} />
    </>
  )
}
export default App;