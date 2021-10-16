import { gql } from '@apollo/client';

export const GET_POKEMON_BY_ID = gql`
  query Pokemon($id: String) {
    pokemon(id: $id) {
      id
      name
      image
      evolutions {
        id
        name
        image
      }
    }
  }
`;
