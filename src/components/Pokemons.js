import React from 'react';

import { useQuery } from '@apollo/client';
import { POKEMONS_QUERY } from './queries';
import Item from './Item';

function Pokemons() {
  const { loading, error, data } = useQuery(POKEMONS_QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Pokemons</h1>
      <div className="pokemonList">
        {data.pokemons.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Pokemons;
