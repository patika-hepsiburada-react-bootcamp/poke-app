import React from 'react';

import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_POKEMON_BY_ID } from './queries';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
import Evolutions from './Evolutions';

function Detail() {
  const { pokemon_id } = useParams();

  const { loading, error, data } = useQuery(GET_POKEMON_BY_ID, {
    variables: {
      id: pokemon_id,
    },
    // fetchPolicy: 'cache-only'
  });

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  console.log(data);

  const { name, image, evolutions } = data.pokemon;

  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt="" className="item-img" />

      <Evolutions data={evolutions} />
    </div>
  );
}

export default Detail;
