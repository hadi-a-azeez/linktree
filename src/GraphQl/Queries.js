import {  gql } from "@apollo/client";

export const GET_LINKS = gql`
    query getLinks {
      getLinks {
        id
        title
        url
        position
      }
    }
  `;