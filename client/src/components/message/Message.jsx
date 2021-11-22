import './message.css'

export default function Message({ own }) {
  return (
    <div className={own ? 'message own' : 'message'}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP86IyvYRW2t08mwk3yTBVavGnSDTOmW0IlBF5O47Tb7lkBMI05zqBrdb1sKjmLx5az9M&usqp=CAU"
          alt=""
          className="conversationImg"
        />
        <p className="messageText">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
          perspiciatis provident placeat asperiores aliquid autem nisi alias
          odio omnis expedita.
        </p>
      </div>
      <div className="messageBottom">1 hour ago</div>
    </div>
  )
}
