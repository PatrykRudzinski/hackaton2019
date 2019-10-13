import React from 'react';
import CategoryTile from "../CategoryTile";
import styled from "styled-components";
import OpenStreetMap from "../Map/OpenStreetMap";
import PigeonMaps from "../PigeonMap";

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  padding: 1rem;
  @media (min-width: 780px) {
    grid-template-columns: repeat(4, 1fr);;
  }
  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const NoticeDetail = ({notice}) => {

    return (
        <PigeonMaps notice={notice}> </PigeonMaps>
    )
};

export default NoticeDetail;
