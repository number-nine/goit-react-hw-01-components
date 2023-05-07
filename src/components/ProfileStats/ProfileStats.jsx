import PropTypes from 'prop-types';
import {
  StatsContainer,
  StatItem,
  StatLabel,
  StatData,
} from 'components/ProfileStats/ProfileStats.styled';

export const ProfileStats = ({ followers = 0, views = 0, likes = 0 }) => {
  return (
    <StatsContainer>
      <StatItem>
        <StatLabel>Followers</StatLabel>
        <StatData>{followers}</StatData>
      </StatItem>
      <StatItem>
        <StatLabel>Views</StatLabel>
        <StatData>{views}</StatData>
      </StatItem>
      <StatItem>
        <StatLabel>Likes</StatLabel>
        <StatData>{likes}</StatData>
      </StatItem>
    </StatsContainer>
  );
};

ProfileStats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
