import React from 'react';

import user from 'data/user.json';
// import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import { Profile } from './Profile/Profile.jsx';
// import { Statistics } from './Statistics/Statistics.jsx';
import { FriendList } from './friendlist/FriendList.jsx';
import { TransactionHistory } from './TransactionHistory/TransactionHistory.jsx';

// import css from './App.module.css';

export const App = () => {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      {/* <Statistics title="Upload stats" stats={data} /> */}
      <FriendList friends={friends} />
      <TransactionHistory item={transactions} />;
    </div>
  );
};
