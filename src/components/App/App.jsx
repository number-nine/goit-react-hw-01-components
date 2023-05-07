import { Profile } from 'components/Profile/Profile';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
import { TransactionsHistory } from 'components/TransactionsHistory/TransactionsHistory';

import { Container } from 'components/App/App.styled';

import userData from 'data/user.json';
import statisticsData from 'data/data.json';
import friendsData from 'data/friends.json';
import transactionsData from 'data/transactions.json';

export const App = () => {
  return (
    <Container>
      <Profile {...userData} />
      <Statistics title={'Upload stats'} elements={statisticsData} />
      <FriendList friends={friendsData} />
      <TransactionsHistory items={transactionsData} />
    </Container>
  );
};
