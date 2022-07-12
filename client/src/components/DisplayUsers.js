import React, {useEffect} from 'react';
import {useQuery, gql} from '@apollo/client';

const DisplayUsers = ({update, setUpdate}) => {
  const getUsers = gql`
    {
      users {
        id
        name
      }
    }
  `;

  const {data, loading, error, refetch} = useQuery(getUsers);

  useEffect(() => {
    if (update) {
      refetch();
      setUpdate(false);
      console.log('ran');
    }
  }, [update, setUpdate, refetch]);

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
