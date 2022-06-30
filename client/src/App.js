import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  useLazyQuery,
} from '@apollo/client';
import {getUser, getUsers, getMovie} from './gql/queries';
import {useState} from 'react';

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(), // holds data of previous queries
    uri: 'http://localhost:4000/graphql', // link to graphql api
  });

  const DisplayUsers = () => {
    const {data, loading, error} = useQuery(getUsers);
    if (error) console.error(error);
    return (
      <div>
        <h1>Users</h1>
        {loading && <p>loading.....</p>}
        <p>
          {data && data.users.map(user => <p key={user.id}>{user.name}</p>)}
        </p>
      </div>
    );
  };

  const LazyUsers = () => {
    const [getLazyUsers, {data, loading, error}] = useLazyQuery(getUsers);
    if (error) console.error(error);
    return (
      <div>
        <h1>Lazy Users</h1>
        <button onClick={() => getLazyUsers()}>Get Lazy Users</button>
        {loading && <p>loading.....</p>}
        <p>
          {data && data.users.map(user => <p key={user.id}>{user.name}</p>)}
        </p>
      </div>
    );
  };

  const GetUser = () => {
    const [userID, setUserID] = useState(1);
    const [getUserByID, {data, error}] = useLazyQuery(getUser, {
      variables: {id: userID},
    });

    if (error) console.error(error);
    if (data) console.log(data);

    return (
      <div>
        <h1>Get User</h1>
        <input
          type={'number'}
          value={userID}
          onChange={e => setUserID(e.target.value)}
        />
        <button onClick={() => getUserByID()}>Get User</button>
      </div>
    );
  };

  const GetMovie = () => {
    const [movie, setMovie] = useState('Movie 1');
    const [Movie, {data, error}] = useLazyQuery(getMovie, {
      variables: {title: movie},
    });

    if (error) console.error(error);
    if (data) console.log(data);

    return (
      <div>
        <h1>Get Movie</h1>
        <input
          type={'text'}
          value={movie}
          onChange={e => setMovie(e.target.value)}
        />
        <button onClick={() => Movie()}>Get User</button>
      </div>
    );
  };

  return (
    <ApolloProvider client={client}>
      <div className="App">
        {/* <DisplayUsers />
        <hr /> */}
        <LazyUsers />
        <hr />
        <GetUser />
        <hr />
        <GetMovie />
      </div>
    </ApolloProvider>
  );
}

export default App;
