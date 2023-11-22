// import PropTypes from 'prop-types';

import { Profile } from 'components/Profile/Profile';
import { Statistic } from 'components/Statistics/Statistics';
import { FriendList } from 'components/Friend-list/FriendList';
import { Heading } from 'components/Heading/Heading';
import { TransactionHistory } from 'components/Transaction-history/TransactionHistory';
//! json data
import user from '../src/data/user.json';
import stats from '../src/data/data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',

        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        padding: '35px',
      }}>
      {/* React homework template */}
      <Heading title={'BookFace.com'}></Heading>

      <Profile
        userAvatar={user.avatar}
        userName={user.username}
        userTag={user.tag}
        userLocation={user.location}
        userFollowers={user.stats.followers}
        userViews={user.stats.views}
        userLikes={user.stats.likes}></Profile>
      <Statistic title="Upload stats" stats={stats}></Statistic>
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={transactions} />
    </div>
  );
};
