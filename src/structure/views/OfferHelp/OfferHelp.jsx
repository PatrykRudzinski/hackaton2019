import React from 'react';
import {useQuery} from "@apollo/react-hooks";
import GET_CATEGORIES from "../../../graphql/queries/GET_CATEGORIES";
import Loader from "../../../components/Loader/Loader";
import Error from "../../../components/Error/Error";
import Title from "../../../components/Title/Title";
import CategoriesGrid from "../../../components/CategoriesGrid/CategoriesGrid";
import LayoutGeneral from "../../../containers/Layout/LayoutGeneral/LayoutGeneral";
import GET_NOTICES from "../../../graphql/queries/GET_NOTICES";
import NoticesList from "../../../components/NoticesList/NoticesList";
import styled from "styled-components";
import {Button} from "antd";
import {Link} from "react-router-dom";


const StyledButton = styled(Button)`
  min-height: 20vh !important;
`;

const StyledLink = styled(Link)`
  display: flex;
  min-height: 80%;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;


const OfferHelp = () => {
    const {loading, data, error} = useQuery(GET_NOTICES);
    return (
        <LayoutGeneral>
            {loading && <Loader/>}
            {error && <Error/>}
            {data && (
                <>
                    <Title level={3}>
                        Wybierz w czym chcesz pomóc
                    </Title>
                    <StyledButton>
                        <StyledLink to={{pathname: '/offer-help/map'}}>
                            Widok mapy
                        </StyledLink>
                    </StyledButton>
                    <NoticesList notices={data.general.allNotices}/>
                </>
            )}
        </LayoutGeneral>
)};

export default OfferHelp;
