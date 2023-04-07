const FriendListItem = ({friends}) => {

    return (
        friends.map(item => 
            <li className="item" key = {item.id}>
            <span className="status">{item.isOnline}</span>
            <img  src={item.avatar} alt="User avatar" width="48" />
            <p className="name">{item.name}</p>
            </li>
        )
    ) 
    
}  

export default FriendListItem; 