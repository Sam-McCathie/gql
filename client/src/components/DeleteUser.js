import React, {useState} from 'react';
import {gql, useMutation} from '@apollo/client';
const DeleteUser = ({setUpdate}) => {
  const [user, setUser] = useState(0);

  const DeleteUser = gql`
    mutation DeleteUser($input: DeleteUser) {
      deleteUser(input: $input) {
        name
      }
    }
  `;

  const [deleteUser, {error}] = useMutation(DeleteUser);
  if (error) console.error(error);

  const handleSubmit = e => {
    deleteUser({variables: {input: {id: Number(user)}}});
    setUpdate(true);
    e.preventDefault();
  };

  return (
    <div>
      <h3>Delete User</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={user}
          onChange={e => {
            setUser(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default DeleteUser;
