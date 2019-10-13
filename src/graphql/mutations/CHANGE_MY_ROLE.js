import gql from 'graphql-tag';

const CHANGE_MY_ROLE = gql`
    mutation CHANGE_MY_ROLE($input: String!) {
        changeMyRole(role: $input) {
            user {
                id
                firstName
                lastName
                displayName
            }
        }
    }
`;

export default CHANGE_MY_ROLE;
