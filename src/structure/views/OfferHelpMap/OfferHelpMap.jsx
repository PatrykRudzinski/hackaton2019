import React from 'react';
import {useQuery} from "@apollo/react-hooks";
import Loader from "../../../components/Loader/Loader";
import Error from "../../../components/Error/Error";
import LayoutGeneral from "../../../containers/Layout/LayoutGeneral/LayoutGeneral";
import GET_NOTICES from "../../../graphql/queries/GET_NOTICES";
import NoticesMap from "../../../components/NoticesMap/NoticesMap";
  
const OfferHelpMap = () => {
    const {loading, data, error} = useQuery(GET_NOTICES);
    return (
        <LayoutGeneral>
            {loading && <Loader/>}
            {error && <Error/>}
            {data && (
                <NoticesMap notices={data.general.allNotices}/>
            )}
        </LayoutGeneral>
)};

export default OfferHelpMap;
