import PropTypes from 'prop-types';
import css from './FriendList.module.css';

import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export function FriendList({ friends }) {
  return (
    <ul className={`${css.friendList}`}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className={`${css.item}`}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
      percentage: PropTypes.number,
      isOnline: PropTypes.bool,
    })
  ),
};
