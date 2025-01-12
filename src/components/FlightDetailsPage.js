import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFlightDetails } from '../utils/api';

const FlightDetailsPage = () => {
    const { flightId } = useParams();
    const [flight, setFlight] = useState(null);

    useEffect(() => {
        fetchFlightDetails(flightId).then(setFlight);
    }, [flightId]);

    if (!flight) return <div>Chargement...</div>;

    return (
        <div>
            <h1>Détails du vol</h1>
            <p>Compagnie : {flight.airline}</p>
            <p>Prix : {flight.price}€</p>
            <p>Temps de trajet : {flight.duration}</p>
            <p>Date de départ : {flight.departureDate}</p>
            <p>Classe : {flight.class}</p>
            <p>Bagages inclus : {flight.baggage ? 'Oui' : 'Non'}</p>
        </div>
    );
};

const handleBooking = () => {
    alert('Réservation confirmée !');
};

return (
    <form onSubmit={handleBooking}>
        <input type="text" placeholder="Nom" required />
        <input type="email" placeholder="Email" required />
        <button type="submit">Réserver</button>
    </form>
);


export default FlightDetailsPage;
