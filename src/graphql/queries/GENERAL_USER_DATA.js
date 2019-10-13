import gql from 'graphql-tag';

const GENERAL_USER_DATA = gql`
	query {
    me {
      user {
        id
        displayName
      }
    }
  }
`;

export default GENERAL_USER_DATA;
