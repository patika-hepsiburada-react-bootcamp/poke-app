import { gql } from '@apollo/client';

export const POKEMONS_QUERY = gql`
  query Pokemons {
    pokemons(first: 24) {
      id
      name
      image
      maxHP
    }
  }
`;
