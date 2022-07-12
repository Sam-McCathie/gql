import React from 'react';
import {useQuery, gql} from '@apollo/client';

const DisplayUsers = () => {
  const getUsers = gql`
    {
      users {
        id
        name
      }
    }
  `;

  const {data, loading, error} = useQuery(getUsers);

  if (error) console.error(error);

  return (
    <div>
      <h3>Users</h3>
      {loading && <p>loading.....</p>}
      <p>{data && data.users.map(user => <p key={user.id}>{user.name}</p>)}</p>
    </div>
  );
};

export default DisplayUsers;
