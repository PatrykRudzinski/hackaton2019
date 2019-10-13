import gql from 'graphql-tag';

const GET_ASSISTS = gql`
    query GET_ASSISTS{
        me {
            assists {
                id
                category
                needy {
                    firstName
                    lastName
                }
                address {
                    id
                    geometry {
                        type
                        coordinates
                    }
                    properties {
                        description
                    }
                }
                content
                status
            }
        }
    }
`;

export default GET_ASSISTS;
