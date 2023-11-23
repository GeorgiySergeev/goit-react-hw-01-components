import { Profile } from 'components/Profile/Profile';
import { Statistic } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { Heading } from 'components/Heading/Heading';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
//! json data
import user from 'data/user.json';
import stats from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

const commonCss = {
  display: 'flex',
  flexDirection: 'column',

  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101',
  padding: '35px',
};
export function App() {
  return (
    <div style={commonCss}>
      <Heading title={'BookFace.com'}>Social network user profile</Heading>
      <Profile
        userAvatar={user.avatar}
        userName={user.username}
        userTag={user.tag}
        userLocation={user.location}
        userFollowers={user.stats.followers}
        userViews={user.stats.views}
        userLikes={user.stats.likes}></Profile>
      <Statistic title="Upload stats" stats={stats}></Statistic>
      {/* <Statistic stats={stats}></Statistic> */}
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={transactions} />
    </div>
  );
}
