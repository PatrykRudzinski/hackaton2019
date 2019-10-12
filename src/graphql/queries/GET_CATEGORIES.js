import gql from 'graphql-tag';

const GET_CATEGORIES = gql`
    query GET_CATEGORIES{
        general {
            categories{
              id
              name
              iconName
            }
        }
    }
`;

export default GET_CATEGORIES;
