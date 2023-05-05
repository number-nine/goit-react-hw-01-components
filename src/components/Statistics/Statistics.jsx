// Statistics {title:string, elements:array}

import { Fragment } from 'react';

import PropTypes from 'prop-types';

import { StatisticsElement } from 'components/StatisticsElement/StatisticsElement';

export const Statistics = ({ title, elements = [] }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      <ul className="stat-list">
        {elements.map(({ id, ...elementProps }) => (
          <Fragment key={id}>
            <StatisticsElement {...elementProps} />
          </Fragment>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  elements: PropTypes.array.isRequired,
};
