import React, {useState} from 'react';
import {useLazyQuery, gql} from '@apollo/client';

const GetMovie = () => {
  const [movie, setMovie] = useState('Movie 1');

  const getMovie = gql`
    query Movie($title: String) {
      movie(title: $title) {
        id
        title
      }
    }
  `;

  const [Movie, {data, error}] = useLazyQuery(getMovie, {
    variables: {title: movie},
  });

  if (error) console.error(error);
  if (data) console.log(data);

  return (
    <div>
      <h3>Get Movie</h3>
      <input
        type={'text'}
        value={movie}
        onChange={e => setMovie(e.target.value)}
      />
      <button onClick={() => Movie()}>Get User</button>
      {data && <p>Data logged to console..</p>}
    </div>
  );
};

export default GetMovie;
