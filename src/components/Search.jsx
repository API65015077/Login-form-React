import React from 'react'
import cat1 from '../img/cat_one.png'

const Search = () => {
    return (
        <div className='search'>
            <div className="searchForm">
                <input type="text" placeholder='Find a user'/>
            </div>
            <div className="userChat">
                <img src={cat1} alt="" />
                <div className="userChatInfo">
                    <span>Cat_One</span>
                </div>
            </div>
        </div>
    )
}

export default Search