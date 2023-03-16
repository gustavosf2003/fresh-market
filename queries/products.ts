import { gql } from "@apollo/react-hooks";

export const GET_PRODUCTS = gql`
  {
    ProductItems(sort_by: "name", per_page: 40) {
      items {
        id
        content {
          name
          price
          unit
          origin
          description
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
