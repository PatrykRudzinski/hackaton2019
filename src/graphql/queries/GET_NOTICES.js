import gql from 'graphql-tag';

const GET_NOTICES = gql`
    query GET_NOTICES{
        general {
            allNotices{
              id
              content
            }
        }
    }
`;

export default GET_NOTICES;
