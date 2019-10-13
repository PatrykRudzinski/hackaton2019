import React, {useState} from 'react';
import LayoutGeneral from "../../../../containers/Layout/LayoutGeneral";
import Title from "../../../../components/Title";
import {Card} from "antd";
import styled from "styled-components";
import {useMutation} from "@apollo/react-hooks";
import {DetailsForm} from "../../../../components";
import CREATE_NOTICE from "../../../../graphql/mutations/CREATE_NOTICE";
import Error from "../../../../components/Error";
import {Redirect} from 'react-router-dom';

const StyledWrapper = styled.div`
  padding: 2rem 1rem;
`;

const DetailsSelect = ({location: {state}}) => {
    const category = state && state.category;
    const place = state && state.place;
    const [createNotice] = useMutation(CREATE_NOTICE);
    const [error, setError] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const submitHandler = e => {
        setError(false);
        const input = {
            category: category.id,
            content: e,
            address: place.id
        };
        createNotice({variables: {input}}).then(({data})=>{
            if (data.createNotice.errors) {
                setError(true)
            } else {
                setRedirect(true);
                console.log(data.createNotice)
            }
        });
    };
    if (redirect) {
        return <Redirect
            to={{
                pathname: '/need-help/success',
                state,
            }}
        />
    }
    return (
        <LayoutGeneral>
            <Title level={3}>
                Opisz swój problem
            </Title>
            {category && (
                <Card>
                    Kategoria: {category.name}
                </Card>
            )}
            {place && (
                <Card>
                    Miejsce: {place.description}
                </Card>
            )}
            <StyledWrapper>
                <DetailsForm createNotice={submitHandler}/>
            </StyledWrapper>
            {error && <Error/>}
        </LayoutGeneral>
    )
};

export default DetailsSelect;
