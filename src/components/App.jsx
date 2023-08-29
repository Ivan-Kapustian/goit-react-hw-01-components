import React from 'react';
import { Profile } from 'components/task1/Profile';
import { Statistics } from 'components/task2/Statistics';
import { FriendList } from 'components/task3/FriendList';
import user from 'data/user';
import data from 'data/data';
import friends from 'data/friends.json';
export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
