import FriendListItem from "components/FriendListItem/FriendListItem";
import './FriendList.css'
import '../FriendListItem/FriendListItem.css'
import PropTypes from "prop-types";  
const FriendList = ({friends}) => {
return (
<ul className="friend-list" > {
    friends.map(({avatar, id, isOnline, name }) => (
       <FriendListItem key = {id} avatar = {avatar} isOnline = {isOnline} name = {name}/> 
    ))
}
</ul>)
}
 
FriendList.propTypes = {
friends: PropTypes.arrayOf(PropTypes.shape({avatar: PropTypes.string.isRequired, name:PropTypes.string.isRequired, isOnline: PropTypes.bool.isRequired, id: PropTypes.number.isRequired}))
    
  }
export default FriendList; 
