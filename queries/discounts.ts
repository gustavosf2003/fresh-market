import { gql } from "@apollo/react-hooks";

export const GET_DISCOUNTS = gql`
  {
    DiscountItems(sort_by: "published_at:asc") {
      items {
        id
        content {
          title
          value
          description
        }
      }
    }
  }
`;
