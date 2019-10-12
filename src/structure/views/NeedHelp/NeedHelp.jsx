import React from 'react';
import {LayoutGeneral} from "../../../containers/Layout";
import { useQuery } from '@apollo/react-hooks';
import GET_NOTICES from "../../../graphql/queries/GET_NOTICES";

const NeedHelp = () => {
    const {error, loading, data} = useQuery(GET_NOTICES);
    console.log(data)
    return (
        <LayoutGeneral>
            NeedHelp
        </LayoutGeneral>
    )
};

export default NeedHelp;
