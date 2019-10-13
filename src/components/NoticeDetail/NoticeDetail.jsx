import React from 'react';
import {Button, Icon} from 'antd';
import {withRouter} from 'react-router-dom'
import {useApolloClient} from '@apollo/react-hooks';
import PigeonMaps from "../PigeonMap";
import OFFER_ASSISTANCE from "../../graphql/mutations/OFFER_ASSISTANCE";
import styled from "styled-components";
import {Typography} from "antd";

const {Text} = Typography;

const StyledButtonsWrapper = styled.div`
  display: flex;
  grid-template-columns: 1fr 1fr;
  & > * {
    margin: 1rem;
    flex: 1;
  }
`;

const StyledContentWrapper = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const StyledHeader = styled.div`
  
`;

const NoticeDetail = ({notice, history}) => {
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

    console.log(notice)
    return (
        <>
            <PigeonMaps notice={notice}/>
            <StyledContentWrapper>
                <div>
                    <Text strong>
                        <Icon type={notice.category.iconName} style={{marginRight: '1rem'}}/>
                        {notice.category.name}
                    </Text>
                    <Text>
                        {` dla `}
                    </Text>
                    <Text strong>
                        {notice.needy.displayName}
                    </Text>
                </div>
                <Text>
                    {notice.content}
                </Text>
            </StyledContentWrapper>
            <StyledButtonsWrapper>
                <Button size='large' onClick={()=>history.push('/offer-help/notice-details-select')}>
                    Wróć
                </Button>
                <Button
                    size='large'
                    onClick={clickHandler}
                    type="primary"
                    htmlType="submit"
                >
                    {'Chcę pomóc!'}
                </Button>
            </StyledButtonsWrapper>
        </>
    )
};

export default withRouter(NoticeDetail);
