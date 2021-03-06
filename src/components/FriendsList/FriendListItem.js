import React from 'react';
import PropTypes from 'prop-types';

import defaultImg from '../../images/default.jpg';

import s from '../FriendsList/FriendListItem.module.css';

// const FriendListItem = ({ id, avatar, name, isOnline }) => {
const FriendListItem = ({friend}) => { 
  const avatar = friend.avatar;
  const name = friend.name;
  const isOnline = friend.isOnline;
  const StatusClassName = isOnline ? s.online : s.offLine;
  return (
    <li 
      // key={id} 
      className={s.item}>
      <span 
        className={StatusClassName}>{}
      </span>
      <img 
        className={s.avatar} 
        src={avatar ?? defaultImg} 
        alt="" 
        width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

// FriendListItem.propTypes = {
//   id: PropTypes.number.isRequired,
//   avatar: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   isOnline: PropTypes.bool.isRequired,
// };

export default FriendListItem;
