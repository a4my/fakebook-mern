import './message.css'
import { format } from 'timeago.js'

export default function Message({ message, own }) {
  return (
    <div className={own ? 'message own' : 'message'}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP86IyvYRW2t08mwk3yTBVavGnSDTOmW0IlBF5O47Tb7lkBMI05zqBrdb1sKjmLx5az9M&usqp=CAU"
          alt=""
          className="conversationImg"
        />
        <p className="messageText">{message.text}</p>
      </div>
      <div className="messageBottom">{format(message.createdAt)}</div>
    </div>
  )
}
