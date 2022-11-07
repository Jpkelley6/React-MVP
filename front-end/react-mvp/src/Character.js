import React from "react";
import { useState } from "react";
import {Howl} from 'howler'
import D2Click from './select.wav'
import swal from 'sweetalert'

//Character tile component. Recieves data from App via prop drilling and appends character build tiles to the page based on which class button was clicked from button components
//uses event listener functions on the buttons to add and remove a favorites tag
const Character = (props) => {
  const [favorite, updateFavorite] = useState(props.characters.favorite)
  // function add favorite tag to build
  const setFavorite = () => {
    let update = {
      character_type: props.characters.character_type,
    };
    console.log(props.characters.character_type);
    fetch(
      `http://127.0.0.1:3000/api/characters/setfavorite/${props.characters.character_id}`,
      {
        method: "PATCH",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(update),
      }
    )
      .then((results) => {
        if (results.status === 201){
          swal('Added build to favorites')
        }
      })
      .then(() => {
        updateFavorite('Yes')
        props.updateFavorites()
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //function to remove favorite tag from build (turns "yes" to "no" in the table)
  const removeFavorite = () => {
    let update = {
      character_type: props.characters.character_type,
    };
    console.log(props.characters.character_type);
    fetch(
      `http://127.0.0.1:3000/api/characters/removefavorite/${props.characters.character_id}`,
      {
        method: "PATCH",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(update),
      }
    )
      .then((results) => {
        if (results.status === 201){
          swal('Removed build from favorites')
        }
      })
      .then(() => {
        updateFavorite('No')
        props.updateFavorites()
        props.getAllFavoritesData()
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const cursorClick = new Howl ({
    src: D2Click,
    html5: true,
    volume: .2
  })

  return (
    <>
    <div className="charTile">
      <h1 className="buildTitle">{props.characters.character_type}</h1>
      <ul>
        {props.characters.character_type} uses {props.characters.main_skill} to destroy Diablo's minion's of hell.  The build uses {props.characters.weapon} as it's
        end game weapon. It is leveled using {props.characters.leveling_skill} until you can swap to {props.characters.main_skill}.
      </ul>
      <ul>
        Basic items include:
        <li>Weapon: {props.characters.weapon}</li>
        <li>Shield: {props.characters.shield}</li>
        <li>Helm: {props.characters.helm}</li>
        <li>Chest: {props.characters.chest}</li>
        <li>Boots: {props.characters.boots}</li>
      </ul>
      {favorite === "No" ? (
        <button className="favButton" onClick={() => {setFavorite(); cursorClick.play()}}>Add to favorites</button>
      ) : (
        <button className="favButton" onClick={() => {removeFavorite(); cursorClick.play()}}>Remove favorite</button>
      )}
    </div>
    </>
  );
};

export default Character;
