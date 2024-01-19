import React, {useState} from 'react'
import '../assets/css/Navbar.css'
import NavMenu from './microcomponents/NavMenu'
import { IoIosArrowBack } from "react-icons/io";


function Navbar() {
    return (
        <div className='nav-container' id='nav-container'>
            <BrandName />
            <NavMenu/>
            <NavWrap />
        </div>
    )
}


const BrandName = ()=> {
    return (<h1 id='brand-name'>
        ManagMate
    </h1>)
}

const NavWrap = ()=>{
    const [rotation, setRotation] = useState(0);
    const [togg, setTogg] = useState(false)

    const WrapClick = () => {
        setRotation((rotation + 180) % 360);
        setTogg(!togg)
        let navContainer = document.getElementById('nav-container')
        // if(togg){
            navContainer.classList.toggle('nav-hide')
        // }
        console.log(navContainer)
    };

    const rotationStyle = {
        transform: `rotate(${rotation}deg)`,
        // left:'0'
    };
    return(
        <div className='nav-wrapper' onClick={WrapClick} id="nav-wrapper" style={rotationStyle}>
            <div className="wrap-icon-container">
                <IoIosArrowBack className='wrapper-icon' color='#f9f9f94d'/>
            </div>
        </div>
    )
}

export default Navbar