import React from 'react'
import Amazon from './Amazon.png'
import Paladin from './Paladin.png'
import Sorceress from './Sorceress.png'
import Barbarian from './Barbarian.png'
import moo from './gethit4.wav'
import {Howl} from 'howler'
import D2Click from './select.wav'

//Buttons on top of the page. Event listener tied to each button passed down from App to pull pata from DB and populate data in character tiles
const Buttons = (props) => {

//howl function to play "moo" sound when favorites button is clicked
  const newMoo = new Howl ({
    src: moo,
    html5: true,
    volume: .4
  })
//how function to make D2 select click noise
  const cursorClick = new Howl ({
    src: D2Click,
    html5: true,
    volume: .2
  })

  return (
    <div className='buttons'>
      <img src={Amazon} className='classButton' id='amazon'onClick={()=> {props.getAmazonData(); cursorClick.play()}}></img>
      <img src={Paladin} className='classButton' id='paladin'onClick={() => {props.getPaladinData(); cursorClick.play()}}></img>
      <img src={Sorceress} className='classButton' id='sorceress'onClick={() => {props.getSorceressData(); cursorClick.play()}}></img>
      <img src={Barbarian} className='classButton' id='barbarian'onClick={() => {props.getBarbarianData(); cursorClick.play()}}></img>
      <button className="favButton" id='showFav' onClick={() => {props.getAllFavorites(); newMoo.play()}}>Show Favorited Builds</button>
    </div>
  )
}

export default Buttons
