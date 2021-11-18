import './closeFriends.css'

export default function CloseFriends({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <li className="sidebarFriend">
      <img src={PF + user.profilePicture} alt="" className="sidebarFriendImg" />
      <span className="sidebarFiendName">{user.username}</span>
    </li>
  )
}
