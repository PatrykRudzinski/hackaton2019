import gql from 'graphql-tag';

const CREATE_NOTICE = gql`
    mutation CREATE_NOTICE($input: CreateNoticeInput!) {
        createNotice(input: $input) {
            id
            createdAt
            category
            content
            status
            address
            errors {
                field
                messages
            }
            clientMutationId
        }
    }
`;

export default CREATE_NOTICE;
