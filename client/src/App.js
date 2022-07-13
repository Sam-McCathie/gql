import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import DisplayUsers from './components/DisplayUsers';
import LazyUsers from './components/LazyUsers';
import GetUser from './components/GetUser';
import GetMovie from './components/GetMovie';
import CreateUser from './components/CreateUser';
import {useState} from 'react';
import DeleteUser from './components/DeleteUser';

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(), // holds data of previous queries
    uri: 'http://localhost:4000/graphql', // link to graphql api
  });

  const [update, setUpdate] = useState(false); // hack to handle refetch

  console.log(update);

  return (
    <ApolloProvider client={client}>
      <div className="App" style={{display: 'flex', justifyContent: 'center'}}>
        <div>
          <h1>Queries</h1>
          <DisplayUsers update={update} setUpdate={setUpdate} />
          <hr />
          <LazyUsers />
          <hr />
          <GetUser />
          <hr />
          <GetMovie />
        </div>
        <div style={{marginLeft: '50px'}}>
          <h1>Mutations</h1>
          <CreateUser setUpdate={setUpdate} />
          <hr />
          <DeleteUser setUpdate={setUpdate} />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
