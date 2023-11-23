import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <span className={`${css.status}`}>{isOnline}</span>
      <img
        className={`${css.avatar}`}
        src={avatar}
        alt="User avatar"
        style={{ width: '48px' }}
      />
      <p className={`${css.name}`}>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};
