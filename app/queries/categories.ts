import { gql } from "@apollo/react-hooks";

export const GET_CATEGORIES = gql`
  {
    CategoryItems(sort_by: "updated_at") {
      items {
        id
        name
      }
      total
    }
  }
`;
