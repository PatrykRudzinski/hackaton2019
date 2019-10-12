import React from 'react';
import {LayoutGeneral} from "../../../containers/Layout";
import {useQuery} from '@apollo/react-hooks';
import {Loader, Error, CategoriesGrid} from "../../../components";
import GET_CATEGORIES from "../../../graphql/queries/GET_CATEGORIES";

const NeedHelp = () => {
    const {error, loading, data} = useQuery(GET_CATEGORIES);
    return (
        <LayoutGeneral>
            {loading && <Loader/>}
            {error && <Error/>}
            {data && <CategoriesGrid categories={data.general.categories}/>}
        </LayoutGeneral>
    )
};

export default NeedHelp;
