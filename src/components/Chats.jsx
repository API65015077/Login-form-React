import React from 'react'
import cat2 from "../img/cat_two.png"

const Chats = () => {
    return (
        <div className='chats'>

            <div className="userChat">
                <img src={cat2} alt="" />
                <div className="userChatInfo">
                    <span>Cat_Two</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className="userChat">
                <img src={cat2} alt="" />
                <div className="userChatInfo">
                    <span>Cat_Two</span>
                    <p>Hello</p>
                </div>
            </div>

            <div className="userChat">
                <img src={cat2} alt="" />
                <div className="userChatInfo">
                    <span>Cat_Two</span>
                    <p>Hello</p>
                </div>
            </div>

        </div>
        
    )
}

export default Chats