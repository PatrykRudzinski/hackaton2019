import gql from 'graphql-tag';

const GET_NOTICE = gql`
    query GET_NOTICE($id: String!){
        general {
            notice(id: $id) {
                id
                status
                address {
                    geometry {
                        coordinates
                    }
                }
                content
            }
        }
    }
`;

export default GET_NOTICE;

