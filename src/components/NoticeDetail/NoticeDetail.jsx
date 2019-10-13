import React from 'react';
import {Button} from 'antd';
import {useApolloClient} from '@apollo/react-hooks';
import PigeonMaps from "../PigeonMap";
import OFFER_ASSISTANCE from "../../graphql/mutations/OFFER_ASSISTANCE";


const NoticeDetail = ({notice}) => {
    const client = useApolloClient();

    const clickHandler = e => {
        e.preventDefault();
        client.mutate({
            mutation: OFFER_ASSISTANCE,
            variables: {
                input: {
                    noticeId: notice.id,
                },
            }
        }).then(res => {
            // ...
        }).catch(err => console.error(err));
    };

    return (
        <>
            <PigeonMaps notice={notice}> </PigeonMaps>
            <Button
                onClick={clickHandler}
                type="primary"
                htmlType="submit"
            >
                {'Chcę pomóc!'}
            </Button>
        </>
    )
};

export default NoticeDetail;
