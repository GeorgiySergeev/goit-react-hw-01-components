import PropTypes from 'prop-types';
import css from './profile.module.css';

export const Profile = ({
  userAvatar,
  userName,
  userTag,
  userLocation,
  userFollowers,
  userViews,
  userLikes,
}) => {
  return (
    <div className={`${css.profile}`}>
      <div className={`${css.description}`}>
        <img src={userAvatar} alt="User avatar" className={`${css.avatar}`} />
        <p className={`${css.name}`}>{userName}</p>
        <p className={`${css.tag}`}>{userTag}</p>
        <p className={`${css.location}`}>{userLocation}</p>
      </div>

      <ul className={`${css.stats}`}>
        <li>
          <span className={`${css.label}`}>Followers</span>
          <span className={`${css.quantity}`}>{userFollowers}</span>
        </li>
        <li>
          <span className={`${css.label}`}>Views</span>
          <span className={`${css.quantity}`}>{userViews}</span>
        </li>
        <li>
          <span className={`${css.label}`}>Likes</span>
          <span className={`${css.quantity}`}>{userLikes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  userAvatar: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  userTag: PropTypes.string.isRequired,
  userLocation: PropTypes.string.isRequired,
  userFollowers: PropTypes.number.isRequired,
  userViews: PropTypes.number.isRequired,
  userLikes: PropTypes.number.isRequired,
};
