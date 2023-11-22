import PropTypes from 'prop-types';
import css from './profile.module.css';

export const Profile = props => {
  const {
    userAvatar,
    userName,
    userTag,
    userLocation,
    userFollowers,
    userViews,
    userLikes,
  } = props;
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
  userName: PropTypes.string,
  userAvatar: PropTypes.string,
  userTag: PropTypes.string,
  userLocation: PropTypes.string,
  userFollowers: PropTypes.number,
  userViews: PropTypes.number,
  userLikes: PropTypes.number,
};
