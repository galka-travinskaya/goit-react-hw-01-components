import React from 'react';

import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendsList';
import Transaction from './Transactions';

import userData from '../data/user.json';
import statsData from '../data/statistics.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import './App.css';

const App = () => {
  return (
    <>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics items={statsData} />
      <FriendList friends={friends} />
      <Transaction transactions={transactions} />
    </>
  );
};

export default App;
