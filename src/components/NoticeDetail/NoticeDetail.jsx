import React, {useState} from 'react';
import {Button} from 'antd';
import {useApolloClient} from '@apollo/react-hooks';
import {Redirect} from 'react-router-dom';
import PigeonMaps from "../PigeonMap";
import OFFER_ASSISTANCE from "../../graphql/mutations/OFFER_ASSISTANCE";


const NoticeDetail = ({notice}) => {
    const client = useApolloClient();
    const [redirect, setRedirect] = useState("");

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
            setRedirect(true);
        }).catch(err => console.error(err));
    };

    if (redirect) {
        return <Redirect to='/offer-success'/>
    }
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
