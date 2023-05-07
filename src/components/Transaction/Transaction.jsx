import PropTypes from 'prop-types';

import {
  TransactionCell,
} from 'components/Transaction/Transaction.styled';

export const Transaction = ({ type, amount, currency }) => {
  return (
    <tr>
      <TransactionCell>{type}</TransactionCell>
      <TransactionCell>{amount}</TransactionCell>
      <TransactionCell>{currency}</TransactionCell>
    </tr>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
