import { UserDescr } from 'components/UserDescr/UserDescr';
import { UserStats } from 'components/UserStats/UserStats';
import user from 'data/user';
export const App = () => {
  return (
    <div>
      <UserDescr user />
      <UserStats stats={user.stats} />
    </div>
  );
};
