
"use client"
import { MapContainer, TileLayer, Marker, Popup, LayersControl } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import { useState } from 'react'
import { useMapEvents } from 'react-leaflet'

const iconUrl = "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png";

const markerIcon = L.icon({
    iconUrl: iconUrl,
    iconSize: [20, 30],
});

type Latlng = [number, number]
type LocationMarkprops = {
    position: Latlng | null;
    setPosition: (position: Latlng) => void;
}
function LocationMarker({ position, setPosition }: LocationMarkprops) {
    const map = useMapEvents({
        click(e) {
            const newLocation: Latlng = [e.latlng.lat, e.latlng.lng]
            setPosition(newLocation)
            map.flyTo(e.latlng, map.getZoom())
        },
    })

    return position === null ? null : (
        <Marker position={position} icon={markerIcon}>
            <Popup>You are here</Popup>
        </Marker>
    )
}

const MapLandmark = ({ location }: { location?: { lat: number; lng: number } }) => {


    const defaultLocation: Latlng = [13.75675, 100.50182]
    const [position, setPosition] = useState(null)

    return (
        <>
            <h1 className="text-2xl font-semibold my-4 capitalize">Where is your camp?</h1>
            <input type="hidden" name='lat' value={position ? position[0] : ''}></input>
            <input type="hidden" name='lng' value={position ? position[1] : ''}></input>
            <MapContainer className="h-[50vh] rounded-lg z-0 relative"
                center={location || defaultLocation} zoom={10} scrollWheelZoom={true}>



                <Marker position={location || defaultLocation} icon={markerIcon}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <LocationMarker position={position} setPosition={setPosition} />

                <LayersControl>
                    <LayersControl.BaseLayer name="OpenStreetMap" checked>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name="AirPortMap">
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://tileserver.memomaps.de/tilegen/{z}/{x}/{y}.png"
                        />
                    </LayersControl.BaseLayer>
                </LayersControl>


            </MapContainer>
        </>
    )
}

export default MapLandmark

