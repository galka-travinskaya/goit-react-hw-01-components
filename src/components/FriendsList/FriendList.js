import React from 'react';
import PropTypes from 'prop-types';

import FriendListItem from './FriendListItem';

import s from './FriendsList.module.css';

const FriendList = ({ friends }) => {
  if (friends.length === 0) return null;
  return <ul className={s.friendList}>{friends.map(FriendListItem)}</ul>;
};

FriendList.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
