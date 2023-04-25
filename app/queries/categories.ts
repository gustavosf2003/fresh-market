import { gql } from "@apollo/react-hooks";

export const GET_CATEGORIES = gql`
  {
    CategoryItems {
      items {
        id
        name
      }
      total
    }
  }
`;
