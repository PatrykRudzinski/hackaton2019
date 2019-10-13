import gql from 'graphql-tag';

const GET_TOKEN = gql`
   mutation($email: String!, $password: String!) {
   tokenAuth(email: $email, password: $password) {
     token
   }
 }
`;

export default GET_TOKEN;
