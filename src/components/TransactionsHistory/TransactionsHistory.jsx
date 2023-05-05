import PropTypes from 'prop-types';
import { Fragment } from 'react';

import { Transaction } from 'components/Transaction/Transaction';

export const TransactionsHistory = ({ items }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, ...transactionProps }) => (
          <Fragment key={id}>
            <Transaction {...transactionProps} />
          </Fragment>
        ))}
      </tbody>
    </table>
  );
};

TransactionsHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
