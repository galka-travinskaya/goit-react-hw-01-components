import React from 'react';
// import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem';

import s from './FriendsList.module.css';

const FriendList = ({ friends }) => {
  if (friends.length === 0) return null;
  return (
    <ul 
      className={s.friendList}>{friends.map(friend => <FriendListItem key={friend.id} friend={friend}/>)}
    </ul>
  )
    
};

// FriendList.propTypes = {
//   friends: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       isOnline: PropTypes.bool.isRequired,
//       avatar: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//     })).isRequired,
// };



export default FriendList;
