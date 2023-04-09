import './FriendListItem.css'
const FriendListItem = ({avatar, name, isOnline}) => {
   
    return (
        
            <li className="item-friend" >
            <span className= {isOnline ?  "status" : "noStatus"
}> </span>
            <img  src={avatar} alt="User avatar" width="48" />
            <p className="name">{name}</p>
            </li>
        )
    
    
}  

export default FriendListItem; 