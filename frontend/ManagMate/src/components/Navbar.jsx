import React from 'react'
import '../assets/css/Navbar.css'
import NavMenu from './microcomponents/NavMenu'

function Navbar() {
    return (
        <div className='nav-container' id='nav-container'>
            <BrandName />
            <NavMenu />
        </div>
    )
}


const BrandName = ()=> {
    return (<h1 id='brand-name'>
        ManagMate
    </h1>)
}

export default Navbar