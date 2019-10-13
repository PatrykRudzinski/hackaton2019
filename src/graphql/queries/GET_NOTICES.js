import gql from 'graphql-tag';

const GET_NOTICES = gql`
    query GET_NOTICES{
        general {
            allNotices{
              id
              category
              content
              needy {
                displayName
              }
              address {
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
