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
                    <NoticesList notices={data.general.allNotices}/>
                </>
            )}
        </LayoutGeneral>
)};

export default OfferHelp;
