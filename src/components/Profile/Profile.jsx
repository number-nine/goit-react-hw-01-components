import PropTypes from 'prop-types';
import { ProfileStats } from 'components/ProfileStats/ProfileStats';
import {
  ProfileCard,
  ProfileDescription,
  Avatar,
  UserName,
  UserData,
} from 'components/Profile/Profile.styled';

export const Profile = ( {
    username = 'James Bond',
    tag = '007',
    location = 'UK',
    avatar = 'https://www.kindpng.com/picc/m/83-836008_james-bond-james-bond-icon-png-transparent-png.png',
    stats,
  },
) => {
  return (
    <ProfileCard>
      <ProfileDescription>
        <Avatar src={avatar} alt="User avatar"/>
        <UserName>{username}</UserName>
        <UserData>@{tag}</UserData>
        <UserData>{location}</UserData>
      </ProfileDescription>
          <ProfileStats {...stats} />
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};
