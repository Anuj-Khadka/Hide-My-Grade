import React, {useState} from 'react'
import { PiFolderBold, PiHouseBold } from "react-icons/pi";
import { HiOutlineUserGroup } from "react-icons/hi2";

import userProfile from '../../assets/imgs/user-profile.jpg'


function NavMenu() {
    return (
        <div  className="nav-menu" >
            <NavList />
            <UserBar />
        </div>
    )
}

const NavList = () => {
    return (
        <>
            <ul className="nav-list">
                <li className="nav-item active-link">
                    <a href="#" className='nav-links '>
                        <div className="nav-link-title">
                            <PiHouseBold className="nav-link-icon" size='20' />
                            <span>
                                Home
                            </span>
                        </div>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className='nav-links'>
                        <div className="nav-link-title">
                            <PiFolderBold className="nav-link-icon" size='20' />
                            <span>
                                Projects
                            </span>
                        </div>
                    </a>
                </li>
                <li className="nav-item">
                    <a href="#" className='nav-links'>
                        <div className="nav-link-title">
                            <HiOutlineUserGroup className="nav-link-icon" size='20'/>
                            <span>
                                Teams
                            </span>
                        </div>
                    </a>
                </li>
            </ul>
        </>
    )
}

const UserBar = () => {
    return (
        <div className='user-bar-container'>
            <div className="user-content">
                <div className="user-profile-pic">
                    <img src={userProfile} alt="user-profile" id="nav-user-profile"/>
                </div>
                <div className="user-name">
                    Anuj Khadka
                </div>
            </div>
        </div>
    )
}


export default NavMenu