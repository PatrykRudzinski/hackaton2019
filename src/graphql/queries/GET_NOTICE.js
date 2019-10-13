import gql from 'graphql-tag';

const GET_NOTICE = gql`
    query GET_NOTICE($id: String!){
        general {
            notice(id: $id) {
                id
                status
                address {
                    id
                    geometry {
                        coordinates
                    }
                    properties {
                        description
                    }
                }
                content
            }
        }
    }
`;

export default GET_NOTICE;

