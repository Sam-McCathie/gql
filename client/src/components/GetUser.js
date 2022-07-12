import React, {useState} from 'react';
import {useLazyQuery, gql} from '@apollo/client';

const GetUser = () => {
  const [userID, setUserID] = useState(1);

  const getUser = gql`
    query User($id: ID!) {
      user(id: $id) {
        name
        isCool
      }
    }
  `;

  const [getUserByID, {data, error}] = useLazyQuery(getUser, {
    variables: {id: userID},
  });

  if (error) console.error(error);
  if (data) console.log(data);

  return (
    <div>
      <h3>Get User</h3>
      <input
        type={'number'}
        value={userID}
        onChange={e => setUserID(e.target.value)}
      />
      <button onClick={() => getUserByID()}>Get User</button>
      {data && <p>Data logged to console..</p>}
    </div>
  );
};

export default GetUser;
