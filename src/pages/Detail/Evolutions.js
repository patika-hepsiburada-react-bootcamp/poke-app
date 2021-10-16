import React from 'react';
import Item from '../../components/Item';

function Evolutions({ data }) {
  return (
    <>
      {data && data.length > 0 && (
        <>
          <h2>Evolutions</h2>
          <div className="pokemonList">
            {data.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Evolutions;
