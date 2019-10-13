import React from 'react';
import {Link} from "react-router-dom";
import {LayoutGeneral, LayoutCenter} from "../../../../containers/Layout";
import {ButtonLarge, Feedback} from "../../../../components";
import {List, Icon} from 'antd';
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  max-width: 480px;
  padding: 1rem;
  grid-gap: 1rem;
`;

const Success = ({location}) => {
    const {state} = location;
    const data = [
        {
            title: 'Kategoria',
            value: state.category.name
        },
        {
            title: 'Miejsce',
            value: state.place.description,
        },
        {
            title: 'Opis',
            value: state.description,
        },
    ];
    return (
        <LayoutGeneral>
            <LayoutCenter navigation>
                <StyledWrapper>
                    <Feedback type='smile'>
                        Prośba o pomoc została opublikowana
                    </Feedback>
                    <ButtonLarge type="primary">
                        <Link to='/need-help/category-select'>
                            Dodaj kolejną
                        </Link>
                    </ButtonLarge>
                    <ButtonLarge>
                        <Link to='/'>
                            Edytuj prośbę
                        </Link>
                    </ButtonLarge>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Icon type="smile"/>}
                                    title={item.title}
                                    description={item.value}
                                />
                            </List.Item>
                        )}
                    />
                </StyledWrapper>
            </LayoutCenter>
        </LayoutGeneral>
    )
};

export default Success;
