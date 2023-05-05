//StatisticsElement {label: string, percentage:number}

import PropTypes from 'prop-types';

export const StatisticsElement = ({ label = '.*', percentage = 0 }) => {
  return (
    <li className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}%</span>
    </li>
  );
};

StatisticsElement.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
