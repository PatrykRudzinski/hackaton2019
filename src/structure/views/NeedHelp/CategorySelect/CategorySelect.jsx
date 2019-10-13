import React from 'react';
import {LayoutGeneral} from "../../../../containers/Layout";

import GET_CATEGORIES from "../../../../graphql/queries/GET_CATEGORIES";
import {useQuery} from "@apollo/react-hooks";
import {Error, Loader, CategoriesGrid} from "../../../../components";
import Title from "../../../../components/Title";

const CategorySelect = () => {
    const {loading, data, error} = useQuery(GET_CATEGORIES);
    return (
        <LayoutGeneral>
            {loading && <Loader/>}
            {error && <Error/>}
            {data && (
                <>
                    <Title level={3}>
                        Wybierz kategorię
                    </Title>
                    <CategoriesGrid categories={data.general.categories}/>
                </>
            )}
        </LayoutGeneral>
    )
};

export default CategorySelect;
