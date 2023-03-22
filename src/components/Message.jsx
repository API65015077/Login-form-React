import React from 'react'
import cat2 from "../img/cat_two.png"

const Message = () => {
    return (
        <div className='message owner'>
            <div className="messageInfo">
                <img src={cat2} alt="" />
                <span>just now</span>
            </div>
            <div className="messageContent">
                <p>hello</p>
                <img src={cat2} alt="" />
            </div>
        </div>
    )
}

export default Message