import { gql } from "@apollo/react-hooks";

export const GET_PRODUCTS = gql`
  {
    ProductItems {
      items {
        id
        content {
          name
          price
          unit
          origin
          image {
            filename
          }
          category {
            name
          }
        }
      }
    }
  }
`;
