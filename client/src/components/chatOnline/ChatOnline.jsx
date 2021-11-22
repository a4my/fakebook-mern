import './chatOnline.css'

import React from 'react'

export default function ChatOnline() {
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP86IyvYRW2t08mwk3yTBVavGnSDTOmW0IlBF5O47Tb7lkBMI05zqBrdb1sKjmLx5az9M&usqp=CAU"
            alt=""
            className="conversationImg"
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">John Doe</span>
      </div>
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP86IyvYRW2t08mwk3yTBVavGnSDTOmW0IlBF5O47Tb7lkBMI05zqBrdb1sKjmLx5az9M&usqp=CAU"
            alt=""
            className="conversationImg"
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">John Doe</span>
      </div>
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP86IyvYRW2t08mwk3yTBVavGnSDTOmW0IlBF5O47Tb7lkBMI05zqBrdb1sKjmLx5az9M&usqp=CAU"
            alt=""
            className="conversationImg"
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">John Doe</span>
      </div>
    </div>
  )
}
