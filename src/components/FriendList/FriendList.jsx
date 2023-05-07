import PropTypes from 'prop-types';
import { Fragment } from 'react';

import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import { List } from 'components/FriendList/FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, ...elementProps }) => (
        <Fragment key={id}>
          <FriendListItem {...elementProps} />
        </Fragment>
      ))}
    </List>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      // avatar: PropTypes.string.isRequired,
      // name: PropTypes.string.isRequired,
      // isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};
