import React from 'react';
import { Profile } from 'components/task1/Profile';
import { Statistics } from 'components/task2/Statistics';
import user from 'data/user';
import data from 'data/data';
export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
    </div>
  );
};
