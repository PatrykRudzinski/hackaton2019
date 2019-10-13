/*eslint-disable */

import React, {useState} from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';

import './PigeonMaps.styl';
import Redirect from "react-router-dom/es/Redirect";
import Cookies from "universal-cookie";
import {withRouter} from "react-router-dom";

const getProvider = (x, y, z) => `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;


const NoticesMap = ({notices}) => {
    const [redirect, setRedirect] = useState('');
    const [to, setTo] = useState('');

    if (redirect && to) {
        return <Redirect to={to}/>
    }

    const Markers = notices.map(({address, category, id}, idx) => {
        return (
            <Marker key={`marker_${idx}`}
                    anchor={address.geometry.coordinates.reverse()}
                    payload={{noticeId: id}}
                    onClick={function () {
                        setTo({pathname: `/offer-help/notice-details-select/${this.payload.noticeId}`});
                        setRedirect(true);
                    }}
            > </Marker>)
    });

    return (
        <div className="map">
            <Map
                width={700}
                height={500}
                defaultCenter={notices[0].address.geometry.coordinates}
                defaultZoom={11}
                provider={getProvider}
            >
                {Markers}
            </Map>
        </div>
    );
};
export default withRouter(NoticesMap);