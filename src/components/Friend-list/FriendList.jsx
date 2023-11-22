import css from './friend-list.module.css';

export function FriendList({ friends }) {
  return (
    <ul className={`${css.friendList}`}>
      {friends.map(friend => (
        <li className={`${css.item}`} key={friend.id}>
          <span className={`${css.status}`}>{friend.isOnline}</span>
          <img
            className={`${css.avatar}`}
            src={friend.avatar}
            alt="User avatar"
            style={{ width: '48px' }}
          />
          <p className={`${css.name}`}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}
