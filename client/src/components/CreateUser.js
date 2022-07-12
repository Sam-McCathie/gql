import React, {useState} from 'react';

const CreateUser = () => {
  const [user, setUser] = useState({
    name: 'yes',
    age: null,
    nationality: null,
    isCool: null,
  });

  const handleChange = e => {
    const {name, value} = e.target;
    setUser(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <h3>CreateUser</h3>
      <form style={{display: 'flex', flexDirection: 'column'}}>
        <label>
          name:
          <input type="text" name="name" value={user.name}></input>
        </label>
        <label>
          age:
          <input type="text" name="age" value={user.age}></input>
        </label>
        <label>
          nationality:
          <input
            type="text"
            name="nationality"
            value={user.nationality}></input>
        </label>
        <label>
          isCool:
          <input type="text" name="isCool" value={user.isCool}></input>
        </label>
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default CreateUser;
