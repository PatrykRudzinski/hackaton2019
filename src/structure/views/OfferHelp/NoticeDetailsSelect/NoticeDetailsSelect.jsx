import React from 'react';
import {useQuery} from "@apollo/react-hooks";
import GET_NOTICE from "../../../../graphql/queries/GET_NOTICE";
import styled from "styled-components";
import Loader from "../../../../components/Loader/Loader";
import Error from "../../Error/Error";
import NoticeDetail from "../../../../components/NoticeDetail/NoticeDetail";
import LayoutGeneral from "../../../../containers/Layout/LayoutGeneral/LayoutGeneral";

const StyledDivWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 1rem;
  width: 200px;
  height: 200px;
`;

const NoticeDetailsSelect = ({match}) => {
  const {loading, data, error} = useQuery(GET_NOTICE, {variables: {id: match.params.notice}});
  return (
      <LayoutGeneral>
          <StyledDivWrapper>
              {loading && <Loader/>}
              {error && <Error/>}
              {data && <NoticeDetail notice={data.general.notice}> </NoticeDetail>}
          </StyledDivWrapper>
      </LayoutGeneral>

)};

export default NoticeDetailsSelect;
