import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import DisplayUsers from './components/DisplayUsers';
import LazyUsers from './components/LazyUsers';
import GetUser from './components/GetUser';
import GetMovie from './components/GetMovie';
import CreateUser from './components/CreateUser';

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(), // holds data of previous queries
    uri: 'http://localhost:4000/graphql', // link to graphql api
  });

  return (
    <ApolloProvider client={client}>
      <div className="App" style={{display: 'flex', justifyContent: 'center'}}>
        <div>
          <h1>Queries</h1>
          <DisplayUsers />
          <hr />
          <LazyUsers />
          <hr />
          <GetUser />
          <hr />
          <GetMovie />
        </div>
        <div style={{marginLeft: '50px'}}>
          <h1>Mutations</h1>
          <CreateUser />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
