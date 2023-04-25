import { gql } from "@apollo/react-hooks";

export const GET_PRODUCTS = gql`
  query GetProducts($searchTerm: String, $perPage: Int) {
    ProductItems(
      sort_by: "name"
      per_page: $perPage
      search_term: $searchTerm
    ) {
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
