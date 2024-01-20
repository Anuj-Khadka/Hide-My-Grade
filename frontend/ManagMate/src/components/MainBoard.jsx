import React from 'react'
import '../assets/css/MainBoard.css'
import AddProject from './microcomponents/AddProject'

function MainBoard() {
  return (
    <div className='mainboard-container' id='mainboard-container'>
    <AddProject />
    </div>

  )
}

export default MainBoard