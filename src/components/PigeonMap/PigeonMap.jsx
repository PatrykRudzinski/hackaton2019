/*eslint-disable */

import React from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';


import './PigeonMaps.styl';

// export const markers = [
//     {
//         name: 'Kottbusser Tor',
//         latlng: [52.499040, 13.418392]
//     }, {
//         name: 'Görlitzer Park',
//         latlng: [52.496912, 13.436738]
//     }, {
//         name: 'webkid',
//         latlng: [52.501106, 13.422061]
//     }
// ];
//
// export const mapConfig = {
//     center: [52.499219, 13.425416],
//     zoom: 15
// };

const getProvider = (x, y, z) => `http://a.tile.openstreetmap.fr/hot/${z}/${x}/${y}.png`;


const PigeonMap = ({notice}) => {
    const Markers = [
        <Marker key={`marker_${notice.address.properties.description}`}
                anchor={notice.address.geometry.coordinates}
                payload={notice.address.properties.description} >

        </Marker>
    ];

    return (
        <div className="map">
            {notice.address.properties.description}
            <Map
                width={500}
                height={500}
                defaultCenter={notice.address.geometry.coordinates.reverse()}
                defaultZoom={10}
                provider={getProvider}
            >
                {Markers}
            </Map>
        </div>
    );
};
export default PigeonMap;