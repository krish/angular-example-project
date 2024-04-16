import { gql } from 'apollo-angular';
export const fetchAllEmployees = {
  query: gql`
    {
      getAllEmployees {
        firstName
        lastName
        city
      }
    }
  `,
};
