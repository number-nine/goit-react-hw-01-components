import { Fragment } from 'react';

import PropTypes from 'prop-types';

import { StatisticsElement } from 'components/StatisticsElement/StatisticsElement';
import {
  StatsContainer,
  StatsHeader,
  StatsList,
} from 'components/Statistics/Statistics.styled';

export const Statistics = ({ title, elements }) => {
  return (
    <StatsContainer>
      {title && <StatsHeader>{title}</StatsHeader>}
      <StatsList>
        {elements.map(({ id, ...elementProps }) => (
          <Fragment key={id}>
            <StatisticsElement {...elementProps} />
          </Fragment>
        ))}
      </StatsList>
    </StatsContainer>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  elements: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
