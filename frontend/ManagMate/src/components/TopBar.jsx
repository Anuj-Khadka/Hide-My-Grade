import React from 'react'
import AddProject from './microcomponents/AddProject'
import '../assets/css/TopBar.css'
import TopRightActions from './microcomponents/TopRightActions'

const TopBar = () => {
  return (
    <div className='main-bar'>
        <AddProject />
        <TopRightActions />
    </div>
  )
}

export default TopBar