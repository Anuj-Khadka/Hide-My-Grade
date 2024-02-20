import React, {useState} from 'react'
import { IoNotificationsOutline, IoSearchOutline  } from "react-icons/io5";

const TopRightActions = () => {
  return (
    <div className='top-right-actions'>
        <SearchBar />
        <NotificationBell />
    </div>
  )
}

const NotificationBell = ()=>{
    return(
        <div className="notification-bell">
            <IoNotificationsOutline size="20px" color="#f1f1f1cd"/>
        </div>
    )
}

const SearchBar = ()=>{
    const [searchText, setSearchText] = useState();
    const searchInputHandler = (event) => {
        setSearchText(event.target.value);
    };
    return(
        <div className="search-bar">
            <div className="search-input">
                <form action="" className='search-form'>
                    <input 
                    type="text"
                    name="search-text"
                    id="searxh-text"
                    placeholder='Search something...'
                    value={searchText}
                    onChange={searchInputHandler}/>
                </form>
                <button type="submit">
                    <IoSearchOutline />
                </button>
            </div>
        </div>
    )
}

export default TopRightActions