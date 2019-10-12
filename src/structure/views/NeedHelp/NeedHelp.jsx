import React from 'react';
import {LayoutGeneral} from "../../../containers/Layout";
import {useQuery} from '@apollo/react-hooks';
import GET_NOTICES from "../../../graphql/queries/GET_NOTICES";
import {Loader, Error, CategoriesGrid} from "../../../components";

const NeedHelp = () => {
    const {error, loading, data} = useQuery(GET_NOTICES);
    return (
        <LayoutGeneral>
            {loading && <Loader/>}
            {error && <Error/>}
            {data && <CategoriesGrid/>}
        </LayoutGeneral>
    )
};

export default NeedHelp;
