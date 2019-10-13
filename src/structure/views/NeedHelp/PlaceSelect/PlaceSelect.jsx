import React from 'react';
import {LayoutGeneral} from "../../../../containers/Layout";
import {useQuery} from "@apollo/react-hooks";
import GET_MY_PLACES from "../../../../graphql/queries/GET_MY_PLACES";
import {Error, Loader, PlacesGrid} from "../../../../components";
import Title from "../../../../components/Title";

const PlaceSelect = ({location: {state}}) => {
    const {loading, data, error} = useQuery(GET_MY_PLACES);
    return (
        <LayoutGeneral>
            {loading && <Loader/>}
            {error && <Error/>}
            {data && (
                <>
                    <Title level={3}>
                        Wybierz miejsce
                    </Title>
                    <PlacesGrid places={data.me.addresses} state={state}/>
                </>
            )}
        </LayoutGeneral>
    )
};

export default PlaceSelect;
