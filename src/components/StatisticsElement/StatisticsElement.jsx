import PropTypes from 'prop-types';

import {
  StatsItem,
  StatText
} from 'components/StatisticsElement/StatisticsElement.styled';

export const StatisticsElement = ({ label = '.*', percentage = 0 }) => {
  return (
    <StatsItem>
      <StatText>{label}</StatText>
      <StatText>{percentage}%</StatText>
    </StatsItem>
  );
};

StatisticsElement.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
