import { Profile } from 'components/Profile/Profile';

import userData from 'components/Profile/user.json';

// const { username, tag, location, avatar, stats } = userData;

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
      <Profile {...userData} />
    </div>
  );
};
