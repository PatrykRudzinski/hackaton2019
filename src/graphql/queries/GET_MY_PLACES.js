import gql from "graphql-tag";

const GET_MY_PLACES = gql`
    query GET_MY_PLACES {
        me {
          addresses{ 
            id
            properties {
              description
            }
          }
        }
    }
`;

export default GET_MY_PLACES;
