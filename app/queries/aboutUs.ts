import { gql } from "@apollo/react-hooks";

export const GET_ABOUTUS = gql`
  {
    AboutusItem(id: "274683537") {
      content {
        title
        body
      }
    }
  }
`;
