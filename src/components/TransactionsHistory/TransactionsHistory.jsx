import PropTypes from 'prop-types';
import { Fragment } from 'react';

import { Transaction } from 'components/Transaction/Transaction';
import {
  TransactionsTable,
  TableHeader,
} from 'components/TransactionsHistory/TransactionHistory.styled';

export const TransactionsHistory = ({ items }) => {
  return (
    <TransactionsTable>
      <thead>
        <tr>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, ...transactionProps }) => (
          <Fragment key={id}>
            <Transaction {...transactionProps} />
          </Fragment>
        ))}
      </tbody>
    </TransactionsTable>
  );
};

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};
