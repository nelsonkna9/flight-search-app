import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { fetchFlights } from '../utils/api';
import FlightCard from '../components/FlightCard';
import 'leaflet/dist/leaflet.css';

const SearchResults = () => {
    const [searchParams] = useSearchParams();
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        const query = searchParams.get('query');
        fetchFlights({ destination: query }).then(setFlights);
    }, [searchParams]);

    return (
        <div>
            <h1>Résultats de recherche</h1>
            <div style={{ height: '400px', width: '100%' }}>
                <MapContainer
                    center={[48.8566, 2.3522]} // Coordonnées par défaut (Paris)
                    zoom={6}
                    style={{ height: '100%', width: '100%' }}
                >
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; OpenStreetMap contributors"
                    />
                    {flights.map((flight) => (
                        <Marker
                            key={flight.id}
                            position={[flight.latitude, flight.longitude]} // Exemples de coordonnées
                        >
                            <Popup>
                                {flight.airline} - {flight.price}€
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>
            {flights.map((flight) => (
                <FlightCard key={flight.id} flight={flight} />
            ))}
        </div>
    );
};

export default SearchResults;
