import gql from 'graphql-tag';

const GET_NOTICE = gql`
    query GET_NOTICE($id: String!){
        general {
            notice(id: $id) {
                id
                status
                needy {
                    displayName
                }
                category {
                    name
                    iconName
                }
                address {
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

