import React from 'react';
import Map from 'pigeon-maps';
import Marker from 'pigeon-marker';

import './PigeonMaps.styl';

const getProvider = (x, y, z) => `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;


const PigeonMap = ({notice}) => {
    const Markers = [
        <Marker key={`marker_${notice.address.properties.description}`}
                anchor={notice.address.geometry.coordinates}
                payload={notice.address.properties.description} >

        </Marker>
    ];

    return (
        <div className="map">
            <Map
                height='50vh'
                defaultCenter={notice.address.geometry.coordinates.reverse()}
                defaultZoom={13}
                provider={getProvider}
            >
                {Markers}
            </Map>
        </div>
    );
};
export default PigeonMap;
