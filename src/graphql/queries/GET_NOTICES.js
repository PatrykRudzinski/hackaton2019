import gql from 'graphql-tag';

const GET_NOTICES = gql`
    query GET_NOTICES{
        general {
            allNotices{
              id
              category {
                name
              }
              content
              needy {
                displayName
              }
              address {
                id
                properties {
                    description
                }
                geometry {
                    coordinates
                }
              }
            }
        }
    }
`;

export default GET_NOTICES;
