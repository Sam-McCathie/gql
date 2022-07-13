import React, {useState} from 'react';
import {gql, useMutation} from '@apollo/client';

const CreateUser = ({setUpdate}) => {
  const [user, setUser] = useState({
    name: '',
    age: 0,
  });

  const handleChange = e => {
    const {name, value} = e.target;
    setUser(prev => {
      return {
        ...prev,
        [name]: name === 'age' ? Number(value) : value,
      };
    });
  };

  const CreateUser = gql`
    mutation CreateUser($input: CreateUserInput!) {
      createUser(input: $input) {
        name
        age
      }
    }
  `;

  const [createUser] = useMutation(CreateUser);

  const handleSubmit = e => {
    const data = user.age === 0 ? {...user, age: null} : user;
    createUser({variables: {input: data}});
    e.preventDefault();
    setUpdate(true);
  };

  return (
    <div>
      <h3>CreateUser</h3>
      <form
        style={{display: 'flex', flexDirection: 'column'}}
        onSubmit={handleSubmit}>
        <label>
          name:
          <input
            type="text"
            name="name"
            value={user.name}
            onChange={handleChange}></input>
        </label>
        <label>
          age:
          <input
            type="number"
            name="age"
            value={user.age}
            onChange={handleChange}></input>
        </label>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default CreateUser;
