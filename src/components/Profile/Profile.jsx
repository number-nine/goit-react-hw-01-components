


//Profile {name:string, tag:string, location:string, avatar:string, stats:obj}

import PropTypes from 'prop-types';
import { ProfileStats } from 'components/ProfileStats/ProfileStats';

export const Profile = ( {
    username = 'James Bond',
    tag = '007',
    location = 'UK',
    avatar = 'https://www.kindpng.com/picc/m/83-836008_james-bond-james-bond-icon-png-transparent-png.png',
    stats,
  },
) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>
          <ProfileStats {...stats} />
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
