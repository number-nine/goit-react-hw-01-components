// FriendList {friends:array}

import PropTypes from 'prop-types';
import { Fragment } from 'react';

import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ id, ...elementProps }) => (
        <Fragment key={id}>
          <FriendListItem {...elementProps} />
        </Fragment>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
