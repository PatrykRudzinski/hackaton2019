import React from "react";
import { ReactComponent as Icon } from '../../../assets/icons/heart.svg';
import Wrapper from "../_components/Wrapper";

const Heart = (props) => (
  <Wrapper {...props}>
    <Icon />
  </Wrapper>
);

export default Heart;
