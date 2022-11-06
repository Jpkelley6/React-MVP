import React from 'react'
import Amazon from './Amazon.png'
import Paladin from './Paladin.png'
import Sorceress from './Sorceress.png'
import Barbarian from './Barbarian.png'

//Buttons on top of the page. Event listener tied to each button passed down from App to pull pata from DB and populate data in character tiles
const Buttons = (props) => {

  return (
    <div className='buttons'>
      <img src={Amazon} className='classButton' id='amazon'onClick={props.getAmazonData}></img>
      <img src={Paladin} className='classButton' id='paladin'onClick={props.getPaladinData}></img>
      <img src={Sorceress} className='classButton' id='sorceress'onClick={props.getSorceressData}></img>
      <img src={Barbarian} className='classButton' id='barbarian'onClick={props.getBarbarianData}></img>
      <button className="favButton" id='showFav' onClick={props.getAllFavorites}>Show Favorited Builds</button>
    </div>
  )
}

export default Buttons
