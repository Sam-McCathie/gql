import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
} from '@apollo/client';
import {users} from './gql/queries';

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(), // holds data of previous queries
    uri: 'http://localhost:4000/graphql', // link to graphql api
  });

  console.log(users);

  const DisplayUsers = () => {
    const {data, loading} = useQuery(users);
    if (data) console.log(data);

    return (
      <div>
        <h1>Users</h1>
        {loading && <p>loading.....</p>}
        <p>{data && data.users.map(user => <p>{user.name}</p>)}</p>
      </div>
    );
  };

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <DisplayUsers />
        <hr />
      </div>
    </ApolloProvider>
  );
}

export default App;
