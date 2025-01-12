import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [query, setQuery] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [travelClass, setTravelClass] = useState('economy');
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(
            `/search?query=${query}&departureDate=${departureDate}&returnDate=${returnDate}&class=${travelClass}`
        );
    };

    return (
        <div>
            <h1>Recherche de vols</h1>
            <input
                type="text"
                placeholder="Destination"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <input
                type="date"
                value={departureDate}
                onChange={(e) => setDepartureDate(e.target.value)}
            />
            <input
                type="date"
                value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)}
            />
            <select
                value={travelClass}
                onChange={(e) => setTravelClass(e.target.value)}
            >
                <option value="economy">Économique</option>
                <option value="business">Affaires</option>
            </select>
            <button onClick={handleSearch}>Rechercher</button>
        </div>
    );
};

export default Home;
