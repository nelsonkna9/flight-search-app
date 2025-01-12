import React from 'react';
import './FlightCard.scss';

const FlightCard = ({ flight }) => {
    return (
        <div className="flight-card">
            <h3>{flight.airline}</h3>
            <p>Prix : {flight.price}€</p>
            <p>Durée : {flight.duration}</p>
        </div>
    );
};

export default FlightCard;