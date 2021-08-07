import {  gql } from "@apollo/client";

export const ADD_LINK = gql`
    mutation addLink($linkObj: newLink) {
      addLink(linkObj: $linkObj) {
            id,
            account_id,
            position,
            thumbnailUrl,
            title,
            type,
            url
        }
  }
`;