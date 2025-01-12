import React from 'react';

const FlightMap = ({ coordinates }) => {
    return (
        <div>
            <h2>Carte des vols</h2>
            <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=VOTRE_API_KEY&q=${coordinates}`}
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                title="Carte des vols"
            ></iframe>
        </div>
    );
};

export default FlightMap;
