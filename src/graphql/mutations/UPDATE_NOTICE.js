import gql from 'graphql-tag';

const UPDATE_NOTICE = gql`
    mutation UPDATE_NOTICE($input: UpdateNoticeInput!) {
        updateNotice(input: $input) {
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

export default UPDATE_NOTICE;