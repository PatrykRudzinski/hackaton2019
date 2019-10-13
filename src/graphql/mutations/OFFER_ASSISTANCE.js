import gql from 'graphql-tag';

const OFFER_ASSISTANCE = gql`
    mutation OFFER_ASSISTANCE($input: NoticeIdInput!) {
        offerAssistance(input: $input) {
            notice {
                id
                createdAt
                category
                content
                status
                address
            }
        }
    }
`;

export default OFFER_ASSISTANCE;
