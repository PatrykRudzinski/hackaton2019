import React, { PureComponent } from 'react';
import Leaflet from 'leaflet';
import { Map, Marker, Popup, TileLayer, GeoJSON } from 'react-leaflet';
import './ReactLeafletMap.styl';
import styled from "styled-components";

const StyledDivWrapper = styled.div`
  width: 200px;
  height: 200px;
`;

export const markers = [
    {
        name: 'Kottbusser Tor',
        latlng: [52.499040, 13.418392]
    }, {
        name: 'Görlitzer Park',
        latlng: [52.496912, 13.436738]
    }, {
        name: 'webkid',
        latlng: [52.501106, 13.422061]
    }
];

export const mapConfig = {
    center: [52.499219, 13.425416],
    zoom: 8
};

Leaflet.Icon.Default.imagePath = '//cdnjs.cloudflare.com/ajax/libs/leaflet/1.0.0/images/';

const OpenStreetMap = (props) => {


    const LeafletMarkers = markers.map(marker => (
        <Marker position={marker.latlng} key={`marker_${marker.name}`}>
            <Popup>
                <span>{marker.name}</span>
            </Popup>
        </Marker>
    ));

    return (
        <StyledDivWrapper>
            <Map center={mapConfig.center} zoom={mapConfig.zoom} className="map__reactleaflet">
                <TileLayer
                    url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
                />
                {LeafletMarkers}
            </Map>
        </StyledDivWrapper>
    );
};

export default OpenStreetMap;