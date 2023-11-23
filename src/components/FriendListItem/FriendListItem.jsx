import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export function FriendListItem({ avatar, name, isOnline }) {
  const backgroundColor = isOnline ? 'green' : 'red';

  return (
    <>
      <img className={`${css.avatar}`} src={avatar} alt="User avatar" />
      <div className={`${css.statusBox}`}>
        <span style={{ backgroundColor }} className={`${css.status}`}>
          {isOnline}
        </span>
        <p className={`${css.name}`}>{name}</p>
      </div>
    </>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};
