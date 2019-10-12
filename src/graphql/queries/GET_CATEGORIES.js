import gql from 'graphql-tag';

const GET_CATEGORIES = gql`
    query GET_CATEGORIES{
        general {
            allNotices{
              id
              content
            }
        }
    }
`;

export default GET_CATEGORIES;
