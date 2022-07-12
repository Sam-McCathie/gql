import React from 'react';
import {useLazyQuery, gql} from '@apollo/client';

const LazyUsers = () => {
  const getUsers = gql`
    {
      users {
        id
        name
      }
    }
  `;

  const [getLazyUsers, {data, loading, error}] = useLazyQuery(getUsers);

  if (error) console.error(error);

  return (
    <div>
      <h3>Lazy Users</h3>
      <button onClick={() => getLazyUsers()}>Get Lazy Users</button>
      {loading && <p>loading.....</p>}
      <p>{data && data.users.map(user => <p key={user.id}>{user.name}</p>)}</p>
    </div>
  );
};

export default LazyUsers;
