import { Profile } from 'components/task1/Profile/Profile';

import user from 'data/user';
export const App = () => {
  return (
    <div>
      <Profile user={user} />
    </div>
  );
};
